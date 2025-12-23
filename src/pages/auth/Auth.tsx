import { useNavigate } from "react-router-dom";
import SocialButtons from "../../components/auth/SocialButtons";
import Button from "../../components/common/Button";
import AuthLayout from "../../components/layout.tsx/AuthLayout";
import GlassCard from "../../components/layout.tsx/GlassCard";

function Auth() {
  const navigate = useNavigate()
  return (
    <AuthLayout>
      <GlassCard>
        <div className="w-full mx-auto text-center">
          <p className="text-[32px] "> Lets Get Started </p>
          <p className="text-[16px]"> Let’s dive into your account</p>
          <div className="py-[44px]">
            <SocialButtons />
          </div>


        <div className="space-y-3">
          <Button onClick={()=>navigate('/signup')}>SIGN UP</Button>

          <Button  onClick={()=>navigate('/login')} variant="secondary">
            LOGIN
          </Button>
        </div>
        </div>
      </GlassCard>
    </AuthLayout>
  );
}

export default Auth;
