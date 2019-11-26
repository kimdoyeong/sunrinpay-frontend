import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

function useAPIWithToken(func: (token: string) => Function) {
  const { token, logined } = useSelector(
    (state: RootState) => state.Auth.token
  );
  if (!logined || !token) return;
  return func(token);
}
export default useAPIWithToken;
