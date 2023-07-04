import FormRegister from "../components/Form/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default Register;
