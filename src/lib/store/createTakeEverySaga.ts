import { takeEvery } from "redux-saga/effects";

interface TakeSagas {
  type: string;
  taker(): any;
}
function createTakeEverySaga(sagas: TakeSagas[]) {
  return function*() {
    for (const saga of sagas) {
      yield takeEvery(saga.type, saga.taker);
    }
  };
}

export default createTakeEverySaga;
