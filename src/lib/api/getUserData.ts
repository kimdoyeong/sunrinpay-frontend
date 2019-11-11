import client from "./client";

async function getUserDataAPI(token: string) {
  const res = await client.get("/auth", {
    headers: {
      "x-access-token": token
    }
  });
  return res.data.user;
}

export default getUserDataAPI;
