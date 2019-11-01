import { combineReducers } from "redux";
import token, { TokenType, tokenSaga } from "./token";
import { all } from "redux-saga/effects";

export interface AuthType {
  token: TokenType;
}

export const AuthReducer = combineReducers({
  token
});

export function* authSaga() {
  yield all([tokenSaga()]);
}
