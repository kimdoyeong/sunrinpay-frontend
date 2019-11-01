import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

function useLogin() {
  const { logined, token } = useSelector(
    (state: RootState) => state.Auth.token
  );
  if (!logined) return null;
  return token;
}

export default useLogin;
