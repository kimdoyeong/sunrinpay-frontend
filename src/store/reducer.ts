import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import FormReducer, { FormState, FormSaga } from "./Form";
import { AuthReducer, AuthType, authSaga } from "./Auth";
import ModalReducer, { ModalType } from "./Modal";

export interface RootState {
  Form: FormState;
  Auth: AuthType;
  Modal: ModalType;
}

const reducer = combineReducers({
  Form: FormReducer,
  Auth: AuthReducer,
  Modal: ModalReducer
});
export function* RootSaga() {
  yield all([FormSaga(), authSaga()]);
}
export default reducer;
