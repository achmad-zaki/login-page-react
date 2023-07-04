import FormInput from "../Form/Index"
import Input from "../Form/Input"
import Label from "../Form/Label"
import Button from "../Button/Button"

import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const showToast = (message) => {
        toast.error(message)
    }
    const onSubmit = (data) => {
        const savedEmail = localStorage.getItem("email")
        const savedPassword = localStorage.getItem("password")

        if ((data.email === savedEmail && data.password) === savedPassword) {
            console.log("sukses")
            navigate("/dashboard")
        } else {
            console.log("gagal")
            showToast("Wrong email or password")
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                theme="dark" 
            />
            <FormInput className="mt-4">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="text"
                    name="email"
                    placeholder="Example@gmail.com"
                    register={register}
                    required={true}
                    errors={errors}
                    pattern={/@/}
                    message="Please enter a valid email address"
                />
            </FormInput>
            <FormInput className="mt-4">
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    register={register}
                    required={true}
                    errors={errors}
                    message="Wrong password"
                />
            </FormInput>
            <div className="text-right my-4">
                <a href="#" className="text-[#1E4AE9]">
                    Forgot Password?
                </a>
            </div>
            <Button type="submit" text="Sign in" className="btn-primary" />
        </form>
    )
}

export default FormLogin