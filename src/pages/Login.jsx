import FormLogin from "../components/Form/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default Login;
