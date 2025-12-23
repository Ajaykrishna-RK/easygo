type LoginForm = {
  email?: string;
  phone?: string;
  password: string;
};

type SignupForm = LoginForm & {
  confirmPassword: string;
};

type Method = "email" | "mobile";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useAuthValidation = () => {
  const validateLogin = (form: LoginForm, method: Method) => {
    if (method === "email") {
      if (!form.email?.trim()) {
        alert("Email is required");
        return false;
      }

      if (!EMAIL_REGEX.test(form.email)) {
        alert("Please enter a valid email address");
        return false;
      }
    }

    if (method === "mobile" && !form.phone?.trim()) {
      alert("Mobile number is required");
      return false;
    }

    if (!form.password.trim()) {
      alert("Password is required");
      return false;
    }

    return true;
  };

  const validateSignup = (form: SignupForm, method: Method) => {
    if (method === "email") {
      if (!form.email?.trim()) {
        alert("Email is required");
        return false;
      }

      if (!EMAIL_REGEX.test(form.email)) {
        alert("Please enter a valid email address");
        return false;
      }
    }

    if (method === "mobile" && !form.phone?.trim()) {
      alert("Mobile number is required");
      return false;
    }

    if (!form.password.trim()) {
      alert("Password is required");
      return false;
    }

    if (!form.confirmPassword.trim()) {
      alert("Confirm password is required");
      return false;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  };

  return { validateLogin, validateSignup };
};
