import axios from "axios";

const client = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "https://api.sunrinpay.doyeong.kim/" : "http://localhost:4000"
});

export default client;
