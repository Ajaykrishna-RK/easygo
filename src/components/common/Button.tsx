import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  fullWidth = true,
  variant = "primary",
}: ButtonProps) => {
  const baseStyle =
    "py-3 rounded-md font-semibold transition focus:outline-none";

  const variants = {
    primary: "bg-[rgba(29,123,216,1)] text-white ",
    secondary:
      "text-white border border-white/40 hover:opacity-90 bg-[linear-gradient(135deg,rgba(153,153,153,1),rgba(255,255,255,1))]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer
        ${baseStyle}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
