const OPEN_MODAL = "Modal/OPEN_MODAL" as const;
const CLOSE_MODAL = "Modal/CLOSE_MODAL" as const;
const TOGGLE_MODAL = "Modal/TOGGLE_MODAL" as const;

type modalTypes = "payment" | "qrcreate";

function dispather(type: any) {
  return (modal: modalTypes) => {
    return {
      type,
      payload: modal
    };
  };
}
export const openModal = dispather(OPEN_MODAL);
export const closeModal = dispather(CLOSE_MODAL);
export const toggleModal = dispather(TOGGLE_MODAL);

type ActionType =
  | ReturnType<typeof openModal>
  | ReturnType<typeof closeModal>
  | ReturnType<typeof toggleModal>;
export interface ModalType {
  payment?: boolean;
  qrcreate?: boolean;
  recognize?: boolean;
  code?: boolean;
}
const initialState: ModalType = {
  payment: false,
  qrcreate: false,
  recognize: false,
  code: false
};

function modalState(
  payload: modalTypes,
  mapFunc = (key: modalTypes) => ({ [key]: true })
) {
  return mapFunc(payload);
}
export default function(state = initialState, action: ActionType): ModalType {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        ...modalState(action.payload)
      };
    case CLOSE_MODAL:
      return {
        ...state,
        ...modalState(action.payload, key => ({ [key]: false }))
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        ...modalState(action.payload, key => ({ [key]: !state[key] }))
      };
    default:
      return state;
  }
}
