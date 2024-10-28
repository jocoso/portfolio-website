// Import Components
import LoginForm from "../components/LoginForm";
import Title from "../components/Title";
import { isLoggedIn } from "../utils/util";

const Login = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4">
            {/* Displays the login form only if the user hadn't logged in yet. */}
            {isLoggedIn() ? (
                <div>You are already logged In.</div>
            ) : (
                <div className="mt-20 max-w-2xl w-full md:w-10/12 lg:w-8/12">

                    {/* Title Section */}
                    <section aria-labelledby="login-title">
                        <Title id="login-title" className="mb-8 text-center">
                            Login
                        </Title>
                    </section>

                    {/* Login Form */}
                    <section aria-labelledby="login-form">
                        <LoginForm className="flex flex-col items-center mx-auto w-full" />
                    </section>

                </div>
            )}
        </main>
    );
};

export default Login;
