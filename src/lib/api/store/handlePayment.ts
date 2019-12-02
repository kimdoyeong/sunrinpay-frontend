import client from "../client";
import handleAPIError from "../handleAPIError";

async function handlePayment(
  type: "QR" | "CODE",
  data: string,
  price: number,
  token: string
) {
  try {
    await client.post(
      "/store/progress",
      { type, data, price },
      {
        headers: {
          "x-access-token": token
        }
      }
    );
  } catch (e) {
    handleAPIError(e);
  }
}

export default handlePayment;
