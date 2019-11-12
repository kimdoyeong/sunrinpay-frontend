import { put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";

function createRequestSaga(
  requestFunc: () => any,
  successFunc: (data: AxiosResponse) => any,
  failureFunc: (message: string) => any
) {
  return function*() {
    try {
      const req = yield call(requestFunc);
      yield put(successFunc(req));
    } catch (e) {
      yield put(failureFunc(e.message));
    }
  };
}

export default createRequestSaga;
