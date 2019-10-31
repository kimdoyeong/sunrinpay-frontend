import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import FormReducer, { FormState, FormSaga } from './Form';

export interface RootState {
    Form: FormState
};

const reducer = combineReducers({
    Form: FormReducer
});
export function* RootSaga() {
    yield all([
        FormSaga()
    ])
}
export default reducer;