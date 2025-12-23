import type { LoginPayload, SignupPayload, SocialLoginPayload } from "../../types/AuthTypes";
import axiosInstance from "../axios";

/* =======================
   TYPES
======================= */


/* =======================
   API CALLS
======================= */

// SIGN UP
export const signupApi = (payload: SignupPayload) => {
  return axiosInstance.post("/user/signup", payload);
};

// LOGIN (Mobile / Email)
export const loginApi = (payload: LoginPayload) => {
  // backend uses same payload for both
  return axiosInstance.post("/user/loginWithPhone", payload);
};

export const socialLoginApi = (payload: SocialLoginPayload) => {
  return axiosInstance.post("/user/socialLogin/add", payload);
};

// VERIFY OTP
export const verifyOtpApi = (userId: string, otp: string) => {
  return axiosInstance.post(`/user/${userId}`, { otp });
};

// RESEND OTP
export const resendOtpApi = (userId: string) => {
  return axiosInstance.post(`/user/resendOtp/${userId}`);
};
