import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'
import SignUp, { SignUpType } from './SignUp'
export interface FormState {
    SignUp: SignUpType
}
const FormReducer = combineReducers({
    SignUp
});
export function* FormSaga() {
    yield all([]);
}
export default FormReducer;