import { ILogin } from "@/types/auth-type/auth-type";
import axiosInstance from "@/utils/services/axiosInstance"

export const login = async (data: ILogin) => {
  const res = await axiosInstance.post("/auth/login", data);
  return res.data;
}
