import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.0.3:4000"
});

export default client;
