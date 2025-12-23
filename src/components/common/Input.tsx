import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputProps {
  label?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}: InputProps) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-[16px] font-medium text-white">
          {label}
        </label>
      )}

      <div className="flex items-center gap-3 px-4 py-3 rounded-md border border-[rgba(29,123,216,1)] bg-white/10 backdrop-blur-md">
        {icon && <span className="text-white/70">{icon}</span>}

        <input
          type={isPassword && show ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent  outline-none text-white placeholder-white/60"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="text-white/70"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
