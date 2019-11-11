import { combineReducers } from "redux";
import token, { TokenType, tokenSaga } from "./token";
import { all } from "redux-saga/effects";
import user, { UserType, userSaga } from "./user";

export interface AuthType {
  token: TokenType;
  user: UserType;
}

export const AuthReducer = combineReducers({
  token,
  user
});

export function* authSaga() {
  yield all([tokenSaga(), userSaga()]);
}
