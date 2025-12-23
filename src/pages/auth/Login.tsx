import LoginComponent from "../../components/auth/LoginComponent";
import AuthLayout from "../../components/layout.tsx/AuthLayout";

function Login() {
  return (
    <div>
      <AuthLayout>
        <LoginComponent />
      </AuthLayout>
    </div>
  );
}

export default Login;
