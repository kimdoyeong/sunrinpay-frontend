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
