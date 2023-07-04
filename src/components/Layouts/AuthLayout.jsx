import Container from "../Container"
import Footer from "../Footer"

import ImgLogin from "../../assets/Login Art.png"
import { Link } from "react-router-dom"

const AuthLayout = ({ children, type }) => {
    return (
        <div className="pt-6 lg:py-6">
            <Container>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-x-6 gap-y-[39px]">
                    <div className="w-full lg:h-screen flex flex-col justify-between lg:w-1/2">
                        <div className="lg:w-3/4 lg:mx-auto">
                            <h1 className="text-2xl md:text-4xl font-sfpro font-semibold tracking-[0.24px] text-secondary">Welcome Back 👋</h1>
                            <p className="md:text-xl font-sfprodisplay font-normal tracking-[0.15px] mt-4 text-[#313957] leading-[160%]">Today is a new day. It's your day. You shape it.
                                Sign in to start managing your projects.
                            </p>
                            {children}
                            <Navigate type={type} />
                        </div>
                        <Footer />
                    </div>
                    <div className="w-full lg:w-1/2 lg:h-screen">
                        <img src={ImgLogin} className="h-[180px] lg:h-full w-full object-cover lg:object-contain rounded-[20px]" alt="image-login" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Navigate = ({ type }) => {
    if (type === "login") {
        return (
            <div className="my-6">
                <p className="text-center">Don't have an account? <Link to={`/register`} className="text-[#1E4AE9]">Sign Up</Link></p>
            </div>
        )
    } else {
        return (
            <div className="my-6">
                <p className="text-center">Already have an account? <Link to={`/`} className="text-[#1E4AE9]">Sign In</Link></p>
            </div>
        )
    }
}

export default AuthLayout