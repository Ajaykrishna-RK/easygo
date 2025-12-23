export interface SignupPayload {
  mobileNumber?: string;
  email?: string;
  password: string;
  rePassword: string;
  region?: string; // +91
  referralCode?: string;
}

export interface LoginPayload {
  mobileNumber?: string;
  email?: string;
  password: string;
  region?: string;
}

export interface SocialLoginPayload {
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  provider: "google" | "apple" | "facebook" | "twitter";
}

