import { useNavigate } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen  bg-cover bg-center relative"
      style={{
        backgroundImage: `
          linear-gradient(
            
            rgba(90, 90, 90, 0.92),
            rgba(20, 30, 120, 0.92)
          ),
          url('/bg.jpg')
        `,
      }}
    >
      {/* Header */}
      <div className="  flex items-center gap-3 p-4 text-white z-20">
        <img
          onClick={() => navigate("/")}
          src="/Vector.svg"
          alt="EasyGo"
          className="w-[207px] h-[56px]"
        />
      </div>

      {/* Centered Content */}
      <div className="min-h-screen  flex items-center justify-center relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
