import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import GlassCard from "../layout.tsx/GlassCard";
import SocialButtons from "./SocialButtons";
import { useLogin } from "../../services/auth/auth.hooks";
import { useNavigate } from "react-router-dom";
import { useAuthValidation } from "../../hooks/useAuthValidation";

function LoginComponent() {
  const [method, setMethod] = useState<"email" | "mobile">("email");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const { login, loading, error } = useLogin();
  const { validateLogin } = useAuthValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateLogin(form, method)) return;

    const payload =
      method === "email"
        ? {
            email: form.email,
            password: form.password,
          }
        : {
            mobileNumber: form.phone,
            password: form.password,
            region: "+91",
          };

    try {
      const res = await login(payload);
      console.log("Login success:", res);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <GlassCard>
      <h2 className="text-[32px] font-semibold text-white text-center mb-6">
        Login Using Number or Email
      </h2>

      {/* Tabs */}
      <div className="flex max-w-[348px] mx-auto mb-6 bg-white/10 rounded-md">
        {["mobile", "email"].map((item) => (
          <button
            key={item}
            onClick={() => setMethod(item as "mobile" | "email")}
            className={`flex-1 py-2 text-sm cursor-pointer font-medium ${
              method === item
                ? "bg-[rgba(29,123,216,1)] text-white rounded-r-md"
                : "text-white/70"
            }`}
          >
            {item === "mobile" ? "Mobile" : "Email"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-[24px]">
        {method === "email" ? (
          <Input
            label="Email Address"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            icon={<Mail size={18} />}
          />
        ) : (
          <Input
            label="Mobile Number"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        )}

        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          icon={<Lock size={18} />}
        />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "LOGIN"}
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 py-10">
        <div className="flex-1 h-px bg-white/30" />
        <span className="text-white/70 text-sm">Or</span>
        <div className="flex-1 h-px bg-white/30" />
      </div>

      {/* Social Buttons */}
      <SocialButtons />

      {/* Footer */}
      <p className="text-xs text-white/70 text-center mt-6">
        By proceeding further you agree to our{" "}
        <span className="underline">Terms & conditions</span> and{" "}
        <span className="underline">Privacy policy</span>
      </p>
    </GlassCard>
  );
}

export default LoginComponent;
