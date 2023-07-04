import FormInput from "../Form/Index"
import Input from "../Form/Input"
import Label from "../Form/Label"
import Button from "../Button/Button"

import { useNavigate } from "react-router-dom"

// react hook form
import { useForm } from "react-hook-form"

const FormRegister = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const id = Date.now()
        localStorage.setItem("id", id)
        localStorage.setItem("name", data.name)
        localStorage.setItem("email", data.email)
        localStorage.setItem("password", data.password)
        navigate("/")
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <FormInput>
                <Label htmlFor="name">Name</Label>
                <Input
                    type="name"
                    name="name"
                    placeholder="Your name"
                    register={register}
                    required={true}
                    errors={errors}
                    message="Please enter your name"
                />
            </FormInput>
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
                    message="Please enter a valid password"
                />
            </FormInput>
            <Button type="submit" text="Sign up" className="btn-primary mt-6" />
        </form>
    )
}

export default FormRegister