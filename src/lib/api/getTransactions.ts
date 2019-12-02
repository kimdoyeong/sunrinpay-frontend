import handleAPIError from "./handleAPIError";
import client from "./client";

async function getTransactions(_id: string, token: string) {
  try {
    const req = await client.get("/auth/transactions", {
      headers: {
        "x-access-token": token
      }
    });

    return req.data.data;
  } catch (e) {
    handleAPIError(e);
  }
}

export default getTransactions;
