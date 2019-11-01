import { takeEvery, call, put, select } from "redux-saga/effects";
import ChangeHandler, {
  ChangeStateHandler
} from "../../lib/store/ChangeHandler";
import GetServerPayload from "../../lib/store/GetServerPayload";
import { RootState } from "../reducer";
import SignUpAPI from "../../lib/api/SignUp";

const FORM_CHANGE = "SignUp/FORM_CHANGE" as const;
const FORM_SUBMIT = "SignUp/FORM_SUBMIT" as const;
const FORM_SUBMIT_SUCCESS = "SignUp/FORM_SUBMIT_SUCCESS" as const;
const FORM_SUBMIT_FAIL = "SignUp/FORM_SUBMIT_FAIL" as const;
export const SignUpChange = ChangeHandler<{
  id?: string;
  password?: string;
  passwordAccept?: string;
  no?: string;
  name?: string;
}>(FORM_CHANGE);
export function SignUpFormSubmit() {
  return {
    type: FORM_SUBMIT
  };
}
function SignUpFormSubmitSuccess() {
  return {
    type: FORM_SUBMIT_SUCCESS
  };
}
function SignUpFormSubmitFail() {
  return {
    type: FORM_SUBMIT_FAIL
  };
}

type ActionType =
  | ReturnType<typeof SignUpChange>
  | ReturnType<typeof SignUpFormSubmit>
  | ReturnType<typeof SignUpFormSubmitSuccess>;

function* FormSumbitSaga() {
  const { id, password, passwordAccept, no, name } = yield select(
    (state: RootState) => state.Form.SignUp
  );
  if (password !== passwordAccept) {
    alert("비밀번호가 같지 않습니다.");
    yield put(SignUpFormSubmitFail());
    return;
  }
  try {
    const data = GetServerPayload({
      id: { value: id, required: true },
      password: { value: password, required: true },
      no: { value: no, required: true },
      name: { value: name, required: true }
    });
    if (!data) {
      yield put(SignUpFormSubmitFail());

      return;
    }
    yield call(SignUpAPI, data);
    yield put(SignUpFormSubmitSuccess());
  } catch (e) {
    if (process.env.NODE_ENV === "development") console.error(e);
    alert("오류가 발생했습니다.");
    yield put(SignUpFormSubmitFail());
  }
}
export function* SignUpSaga() {
  yield takeEvery(FORM_SUBMIT, FormSumbitSaga);
}
export interface SignUpType {
  id: string;
  password: string;
  passwordAccept: string;
  no: string;
  name: string;
  progress?: boolean;
  success?: boolean;
}

const initialState: SignUpType = {
  id: "",
  password: "",
  passwordAccept: "",
  no: "",
  name: "",
  progress: false,
  success: false
};

export default function SignUp(
  state = initialState,
  action: ActionType
): SignUpType {
  switch (action.type) {
    case FORM_CHANGE:
      return ChangeStateHandler(state, action);
    case FORM_SUBMIT:
      return {
        ...state,
        progress: true
      };
    case FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        success: true,
        progress: false
      };
    case FORM_SUBMIT_FAIL:
      return {
        ...state,
        progress: false
      };
    default:
      return state;
  }
}
