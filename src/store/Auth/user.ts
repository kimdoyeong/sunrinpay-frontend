import { call, put, takeEvery, select } from "redux-saga/effects";
import { RootState } from "../reducer";
import getUserDataAPI from "../../lib/api/getUserData";

const GET_USER_DATA = "Auth/User/GET_USER_DATA" as const;
const SET_USER = "Auth/User/SET_USER" as const;
const SET_USER_FAIL = "Auth/User/SET_USER_FAIL" as const;

export function getUserData() {
  return {
    type: GET_USER_DATA
  };
}
function setUser(user: any) {
  return {
    type: SET_USER,
    payload: user
  };
}
function setUserFail() {
  return {
    type: SET_USER_FAIL
  };
}
type ActionType =
  | ReturnType<typeof getUserData>
  | ReturnType<typeof setUser>
  | ReturnType<typeof setUserFail>;

function* getUserDataSaga() {
  const { logined, token } = yield select(
    (state: RootState) => state.Auth.token
  );

  if (!logined) return;
  try {
    const user = yield call(getUserDataAPI, token);
    yield put(setUser(user));
  } catch (e) {
    alert("유저 정보를 불러오는 데 실패했습니다.");
    yield put(setUserFail());
  }
}
export function* userSaga() {
  yield takeEvery(GET_USER_DATA, getUserDataSaga);
}

export type UserType = {
  user: {
    permission: string[];
    _id: string;
    id: string;
    name: string;
    no: string;
    credit: number;
  } | null;
  updated: Date | null;
  fail?: boolean;
};

const initialState: UserType = {
  user: null,
  updated: null,
  fail: false
};

export default function(state = initialState, action: ActionType): UserType {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
        updated: new Date()
      };
    case SET_USER_FAIL:
      return {
        ...state,
        fail: true
      };
    default:
      return state;
  }
}
