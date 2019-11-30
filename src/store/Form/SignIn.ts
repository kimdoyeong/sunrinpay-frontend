import { call, select, takeEvery, put } from "redux-saga/effects";

import ChangeHandler, {
  ChangeStateHandler
} from "../../lib/store/ChangeHandler";
import { RootState } from "../reducer";
import GetServerPayload from "../../lib/store/GetServerPayload";
import { SignInAPI } from "../../lib/api/SignIn";
import { setToken } from "../Auth/token";

const FORM_CHANGE = "SignIn/FORM_CHANGE" as const;
const FORM_SUBMIT = "SignIn/FORM_SUBMIT" as const;
const FORM_SUBMIT_SUCCESS = "SignIn/FORM_SUBMIT_SUCCESS" as const;
const FORM_SUBMIT_FAIL = "SignIn/FORM_SUBMIT_FAIL" as const;

export const SignInChange = ChangeHandler<{
  id?: string;
  password: string;
}>(FORM_CHANGE);
export function SignInFormSubmit() {
  return {
    type: FORM_SUBMIT
  };
}
function formSubmitFail(e: any) {
  return {
    type: FORM_SUBMIT_FAIL,
    payload: e
  };
}
function formSubmitSuccess() {
  return {
    type: FORM_SUBMIT_SUCCESS
  };
}
type ActionType =
  | ReturnType<typeof SignInChange>
  | ReturnType<typeof SignInFormSubmit>
  | ReturnType<typeof formSubmitSuccess>
  | ReturnType<typeof formSubmitFail>;

function* SubmitSaga() {
  try {
    const { id, password } = yield select((state: RootState) => ({
      id: state.Form.SignIn.id,
      password: state.Form.SignIn.password
    }));
    const data = GetServerPayload({
      id: {
        value: id,
        required: true
      },
      password: {
        value: password,
        required: true
      }
    });
    if (!data) throw new Error("필수 데이터가 없습니다.");

    const req = yield call(SignInAPI, data);
    yield put(setToken(req.data.token, "USER"));
    yield put(formSubmitSuccess());
  } catch (e) {
    yield put(formSubmitFail(e.response.data.message || e.message));
  }
}
export function* SignInSaga() {
  yield takeEvery(FORM_SUBMIT, SubmitSaga);
}

export interface SignInType {
  id: string;
  password: string;
  progress: boolean;
  success: boolean;
  error: string | null;
}

const initialState: SignInType = {
  id: "",
  password: "",
  progress: false,
  success: false,
  error: null
};

export default function(state = initialState, action: ActionType): SignInType {
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
        success: true
      };
    case FORM_SUBMIT_FAIL:
      return {
        ...state,
        progress: false,
        error: (action as any).payload
      };
    default:
      return state;
  }
}
