import client from "./client";

export function SignInAPI(data: any) {
  return client.post("/auth", data);
}
