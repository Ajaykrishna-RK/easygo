import AuthLayout from "../../components/layout.tsx/AuthLayout";
import SignupComponent from "../../components/auth/SignupComponent";

function Signup() {
  return (
    <div>
      <AuthLayout>
        <SignupComponent />
      </AuthLayout>
    </div>
  );
}

export default Signup;
