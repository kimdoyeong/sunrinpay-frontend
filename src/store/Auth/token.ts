import { put, takeEvery } from "redux-saga/effects";
const SET_TOKEN = "token/SET_TOKEN" as const;
const SET_TOKEN_DONE = "token/SET_TOKEN_DONE" as const;

export function setToken(token: string) {
  return {
    type: SET_TOKEN,
    payload: token
  };
}
function* setTokenSaga({ payload }: { payload: string }) {
  window.sessionStorage.setItem("auth_token", payload);
  yield put({ type: SET_TOKEN_DONE, payload });
}
export function* tokenSaga() {
  yield takeEvery(SET_TOKEN as any, setTokenSaga);
}
export interface TokenType {
  logined: boolean;
  token: string | null;
}
const initialState: TokenType = {
  logined: !!sessionStorage.getItem("auth_token"),
  token: sessionStorage.getItem("auth_token") || null
};

export default function(state = initialState, action: any): TokenType {
  switch (action.type) {
    case SET_TOKEN_DONE:
      return {
        logined: true,
        token: action.payload
      };
    default:
      return state;
  }
}
