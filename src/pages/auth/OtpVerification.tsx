import { useState } from "react";

import OtpInput from "../../components/common/OtpInput";
import Button from "../../components/common/Button";
import AuthLayout from "../../components/layout.tsx/AuthLayout";
import GlassCard from "../../components/layout.tsx/GlassCard";


const OtpVerification = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  return (
    <AuthLayout>
      <GlassCard>
        <h2 className="text-xl font-semibold text-center mb-2">
          OTP Verification
        </h2>

        <p className="text-sm text-center  mb-6">
          A 4 digit OTP code has been sent to{" "}
          <span className="font-medium">example@gmail.com</span>.
          <br />
          Please enter the code to continue.
        </p>

        <div className="mb-6">
          <p className="text-sm text-center mb-3">Verification Code</p>
          <OtpInput value={otp} onChange={setOtp} />
        </div>

        <div className="space-y-3">
          <Button>SIGN UP</Button>

          <Button variant="secondary">
            RESEND CODE
          </Button>
        </div>
      </GlassCard>
    </AuthLayout>
  );
};

export default OtpVerification;
