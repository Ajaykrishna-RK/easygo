interface AuthButtonProps {
  text: string;
  icon?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
}

const AuthButton = ({
  text,
  icon,
  iconPosition = "left",
  onClick,
  loading = false,
  disabled = false,
  type = "button",
}: AuthButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`flex items-center justify-evenly cursor-pointer gap-3  px-[8px] w-full py-[10px] rounded-md border
        border-white/40 text-white transition
        ${
          disabled || loading
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-white/10"
        }`}
    >
      <img src={icon} className="w-[34px] h-[34px]" alt="" />

      <span className="text-[16px] font-medium">
        { text}
      </span>

    </button>
  );
};

export default AuthButton;
