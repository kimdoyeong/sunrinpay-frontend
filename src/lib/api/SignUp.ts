import client from "./client";

function SignUpAPI(data: any) {
  return client.post("/user", data);
}

export default SignUpAPI;
