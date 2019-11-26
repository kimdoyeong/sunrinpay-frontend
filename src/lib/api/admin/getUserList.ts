import client from "../client";

function getUserList(token: string) {
  return async () => {
    try {
      const data = await client.get("/admin/user", {
        headers: {
          "x-access-token": token
        }
      });
      return data.data;
    } catch (e) {
      throw new Error("정보를 불러오는 데 실패했습니다.");
    }
  };
}

export default getUserList;
