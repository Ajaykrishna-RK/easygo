import { useState } from "react";
import { signupApi, loginApi, verifyOtpApi, resendOtpApi, socialLoginApi } from "./auth.api";
import type { LoginPayload, SignupPayload, SocialLoginPayload } from "../../types/AuthTypes";


export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (payload: SignupPayload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await signupApi(payload);
      return res.data;
    } catch (err: any) {
      setError(err?.message || "Signup failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};


export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: LoginPayload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await loginApi(payload);
      return res.data;
    } catch (err: any) {
      setError(err?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export const useSocialLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const socialLogin = async (payload: SocialLoginPayload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await socialLoginApi(payload);
      return res.data;
    } catch (err: any) {
      setError(err?.message || "Social login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { socialLogin, loading, error };
};




export const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);

  const verifyOtp = async (userId: string, otp: string) => {
    try {
      setLoading(true);
      const res = await verifyOtpApi(userId, otp);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  return { verifyOtp, loading };
};

export const useResendOtp = () => {
  const [loading, setLoading] = useState(false);

  const resendOtp = async (userId: string) => {
    try {
      setLoading(true);
      const res = await resendOtpApi(userId);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  return { resendOtp, loading };
};
