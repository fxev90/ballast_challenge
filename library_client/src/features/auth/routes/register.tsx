import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { RegistrationForm, DTO } from "../components/register";
import { useEffect } from "react";
import { useRegisterUser } from "..";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const Register = () => {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useRegisterUser();

  useEffect(() => {
    isSuccess && navigate("/");
  }, [isSuccess, navigate]);

  const handleSubmit = async (data: DTO) => {
    mutate(data);
  };

  const navigateToLogin = () => navigate("/");

  return (
    <Layout title="Log in to your account">
      <RegistrationForm submitCallback={handleSubmit} />
      <Separator className="m-4" />
      <div className="grid place-items-center">
        <Button onClick={navigateToLogin}>Log In</Button>
      </div>
    </Layout>
  );
};
