import client from "./client";

async function buyProduct(token: string, productname: string, amount: Number) {
  const res: any = await client.post(
    "/onlinestore/transaction",
    {
      token,
      product: productname,
      amount
    },
    {
      headers: {
        "x-access-token": token
      }
    }
  );
  if (res.message) {
    alert(
      `거래에 실패했습니다. ERR:${res.status} - ${res.message} - 다시 시도해주세요.`
    );
  }
  return res.data.token;
}

export default buyProduct;
