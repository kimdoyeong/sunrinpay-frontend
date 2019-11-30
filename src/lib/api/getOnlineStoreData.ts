import client from "./client";

export async function getOnlineStoreData() {
  const res = await client.get("/onlinestore");
  return res.data;
}

export async function getOnlineStoreProductData(title: string) {
  const res = await client.get("/onlinestore/" + title);
  return res.data;
}

export default getOnlineStoreData;
