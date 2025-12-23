import type { LoginPayload, SignupPayload, SocialLoginPayload } from "../../types/AuthTypes";
import axiosInstance from "../axios";

export const signupApi = (payload: SignupPayload) => {
  return axiosInstance.post("/user/signup", payload);
};


export const loginApi = (payload: LoginPayload) => {
  return axiosInstance.post("/user/loginWithPhone", payload);
};

export const socialLoginApi = (payload: SocialLoginPayload) => {
  return axiosInstance.post("/user/socialLogin/add", payload);
};

export const verifyOtpApi = (userId: string, otp: string) => {
  return axiosInstance.post(`/user/${userId}`, { otp });
};

export const resendOtpApi = (userId: string) => {
  return axiosInstance.post(`/user/resendOtp/${userId}`);
};
