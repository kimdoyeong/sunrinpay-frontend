import client from "./client";

async function recieveOnlineData(token: string) {
  const res: any = await client.post(
    "/onlinestore/transaction/recieve",
    {
      productToken: token
    },
    {
      headers: {
        "x-access-token": sessionStorage.getItem("auth_token")
      }
    }
  );
  if (res.message) {
    alert(
      `거래 등록에 실패했습니다. ERR:${res.status} - ${res.message} - 관리자에게 문의하세요.`
    );
    return;
  }
  return { ...res.data.payment };
}

export default recieveOnlineData;
