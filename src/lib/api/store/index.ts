import client from "../client";
import handleAPIError from "../handleAPIError";

export async function SignUp(data: {
  name: string;
  description: string;
  id: string;
  password: string;
}) {
  try {
    await client.post("/store", data);
  } catch (e) {
    handleAPIError(e);
  }
}
export async function SignIn(id: string, password: string) {
  try {
    const req = await client.post("/store/auth", { id, password });
    return req.data.token as string;
  } catch (e) {
    handleAPIError(e);
  }
}
