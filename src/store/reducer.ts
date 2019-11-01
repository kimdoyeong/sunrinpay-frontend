import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import FormReducer, { FormState, FormSaga } from "./Form";
import { AuthReducer, AuthType, authSaga } from "./Auth";

export interface RootState {
  Form: FormState;
  Auth: AuthType;
}

const reducer = combineReducers({
  Form: FormReducer,
  Auth: AuthReducer
});
export function* RootSaga() {
  yield all([FormSaga(), authSaga()]);
}
export default reducer;
