import { put, takeEvery } from "redux-saga/effects";
const SET_TOKEN = "token/SET_TOKEN" as const;
const SET_TOKEN_DONE = "token/SET_TOKEN_DONE" as const;
type UserType = "STORE" | "USER" | "NOT_LOGINED";

export function setToken(token: string, userType: UserType) {
  return {
    type: SET_TOKEN,
    payload: token,
    userType
  };
}
function* setTokenSaga({
  payload,
  userType
}: {
  payload: string;
  userType: UserType;
}) {
  window.sessionStorage.setItem("auth_token", payload);
  window.localStorage.setItem("user_type", userType);
  yield put({ type: SET_TOKEN_DONE, payload, userType });
}
export function* tokenSaga() {
  yield takeEvery(SET_TOKEN as any, setTokenSaga);
}
export interface TokenType {
  logined: boolean;
  token: string | null;
  userType: UserType;
}
const initialState: TokenType = {
  logined: !!sessionStorage.getItem("auth_token"),
  token: sessionStorage.getItem("auth_token") || null,
  userType: (localStorage.getItem("user_type") as UserType) || "NOT_LOGINED"
};

export default function(state = initialState, action: any): TokenType {
  switch (action.type) {
    case SET_TOKEN_DONE:
      return {
        logined: true,
        token: action.payload,
        userType: action.userType
      };
    default:
      return state;
  }
}
