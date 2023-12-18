import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { LoginForm, DTO } from "../components/login";
import { useEffect } from "react";
import { useLogin } from "../api/login";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const Login = () => {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useLogin();

  useEffect(() => {
    isSuccess && navigate("/");
  }, [isSuccess, navigate]);

  const handleSubmit = async (data: DTO) => {
    mutate(data);
  };

  const navigateToRegistration = () => navigate("/register");

  return (
    <Layout title="Log in to your account">
      <LoginForm submitCallback={handleSubmit} />
      <Separator className="m-4" />
      <div className="grid place-items-center">
        <Button onClick={navigateToRegistration}>Sign Up</Button>
      </div>
    </Layout>
  );
};
