import createTakeEverySaga from "../lib/store/createTakeEverySaga";
import createRequestSaga from "../lib/store/createRequestSaga";
import { select, call } from "redux-saga/effects";
import { RootState } from "./reducer";
import client from "../lib/api/client";
import produce from "immer";

const PAYMENT_QR_REQUEST = "Payment/QR_REQUEST" as const;
const PAYMENT_QR_REQUEST_SUCCESS = "Payment/QR_REQUEST_SUCCESS" as const;
const PAYMENT_QR_REQUEST_ERROR = "Payment/QR_REQUEST_ERROR" as const;

export function paymentQRRequest() {
  return {
    type: PAYMENT_QR_REQUEST
  };
}
function paymentQRRequestSuccess(token: string, code: string) {
  return {
    type: PAYMENT_QR_REQUEST_SUCCESS,
    payload: { token, code }
  };
}
function paymentQRRequestError(message: string) {
  return {
    type: PAYMENT_QR_REQUEST_ERROR,
    payload: message
  };
}

type ActionType =
  | ReturnType<typeof paymentQRRequest>
  | ReturnType<typeof paymentQRRequestSuccess>
  | ReturnType<typeof paymentQRRequestError>;

const QRRequestSaga = createRequestSaga(
  function*() {
    const { token, logined } = yield select(
      (state: RootState) => state.Auth.token
    );
    if (!logined) {
      throw new Error("로그인 필요");
    }
    return yield call(
      client.post,
      "/payment/qr",
      {},
      {
        headers: {
          "x-access-token": token
        }
      }
    );
  },
  (data: any) => paymentQRRequestSuccess(data.data.token, data.data.code),
  paymentQRRequestError
);
export const PaymentSaga = createTakeEverySaga([
  {
    type: PAYMENT_QR_REQUEST,
    taker: QRRequestSaga
  }
]);

export interface PaymentType {
  qr: {
    error: null | string;
    success: boolean;
    token: string | null;
    code: string | null;
  };
}

const initialState: PaymentType = {
  qr: {
    error: null,
    success: false,
    token: null,
    code: null
  }
};

export default function(state = initialState, action: ActionType): PaymentType {
  switch (action.type) {
    case PAYMENT_QR_REQUEST_SUCCESS:
      return produce(state, data => {
        data.qr.success = true;
        data.qr.token = action.payload.token;
        data.qr.code = action.payload.code;
      });
    case PAYMENT_QR_REQUEST_ERROR:
      return produce(state, data => {
        data.qr.error = action.payload;
        data.qr.success = false;
      });
    default:
      return state;
  }
}
