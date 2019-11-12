import React from "react";
import { useDispatch } from "react-redux";
import { openModal, closeModal, toggleModal } from "../store/Modal";

function useMakeCallback(modalName: string, dispatcher: any) {
  const dispatch = useDispatch();

  return React.useCallback(() => {
    dispatch(dispatcher(modalName));
  }, [modalName, dispatch, dispatcher]);
}
function useModalControl(modalName: string) {
  const open = useMakeCallback(modalName, openModal);
  const close = useMakeCallback(modalName, closeModal);
  const toggle = useMakeCallback(modalName, toggleModal);

  return { open, close, toggle };
}

export default useModalControl;
