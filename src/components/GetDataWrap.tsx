import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducer";
import { getUserData } from "../store/Auth/user";

interface GetDataWrapProps {
  children: React.ReactNode;
}

function GetDataWrap({ children }: GetDataWrapProps) {
  const { logined, updated, failed, userType } = useSelector(
    (state: RootState) => ({
      logined: state.Auth.token.logined,
      updated: state.Auth.user.updated,
      failed: state.Auth.user.fail,
      userType: state.Auth.token.userType
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!logined) return;
    if (userType !== "USER") return;
    if (!updated || updated.getTime() > Date.now() + 1000 * 60 * 3) {
      // 갱신주기 3분
      dispatch(getUserData());
    }
  }, [logined, updated, dispatch, userType]);

  if (failed) {
    return null;
  }
  return children as any;
}

export default GetDataWrap;
