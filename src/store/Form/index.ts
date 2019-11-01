import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import SignUp, { SignUpType, SignUpSaga } from "./SignUp";
import SignIn, { SignInType, SignInSaga } from "./SignIn";
export interface FormState {
  SignUp: SignUpType;
  SignIn: SignInType;
}
const FormReducer = combineReducers({
  SignUp,
  SignIn
});
export function* FormSaga() {
  yield all([SignUpSaga(), SignInSaga()]);
}
export default FormReducer;
