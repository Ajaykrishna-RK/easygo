import AuthButton from "../common/AuthButton";
import { useSocialLogin } from "../../services/auth/auth.hooks";
import { useNavigate } from "react-router-dom";

function SocialButtons() {
  const { socialLogin } = useSocialLogin();
  const navigate = useNavigate();

  const handleSocialLogin = async (
    provider: "google" | "apple" | "facebook" | "twitter"
  ) => {
    try {
      const payload = {
        firstName: "Test",
        lastName: "User",
        email: "test@gmail.com",
        provider,
      };

      const res = await socialLogin(payload);

      if (res.status === 200) {
        localStorage.setItem("token", res.token);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert("Social login failed");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <AuthButton
        icon="/google.svg"
        text={"Continue with Google"}
        onClick={() => handleSocialLogin("google")}
      />
      <AuthButton
        icon="/apple.svg"
        text="Continue with Apple"
        onClick={() => handleSocialLogin("apple")}
      />
      <AuthButton
        icon="/facebook.svg"
        text="Continue with Facebook"
        onClick={() => handleSocialLogin("facebook")}
      />
      <AuthButton
        icon="/twitter.svg"
        text="Continue with Twitter"
        onClick={() => handleSocialLogin("twitter")}
      />
    </div>
  );
}

export default SocialButtons;
