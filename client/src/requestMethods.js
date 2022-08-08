import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGE3NDgyN2Y4MmI3ZDM4MjAxN2I2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODU2Mzg1NiwiZXhwIjoxNjU4OTk1ODU2fQ.ySznSqGZ6L07NoAQqMsVJjp64zQ3j3ocxA4pbAucOrc";
const BASE_URL = "http://localhost:5000/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
