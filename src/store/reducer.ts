import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import FormReducer, { FormState, FormSaga } from "./Form";
import { AuthReducer, AuthType, authSaga } from "./Auth";
import ModalReducer, { ModalType } from "./Modal";
import PaymentReducer, { PaymentSaga, PaymentType } from "./Payment";

export interface RootState {
  Form: FormState;
  Auth: AuthType;
  Modal: ModalType;
  Payment: PaymentType;
}

const reducer = combineReducers({
  Form: FormReducer,
  Auth: AuthReducer,
  Modal: ModalReducer,
  Payment: PaymentReducer
});
export function* RootSaga() {
  yield all([FormSaga(), authSaga(), PaymentSaga()]);
}
export default reducer;
