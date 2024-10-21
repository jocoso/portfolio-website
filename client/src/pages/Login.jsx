import LoginForm from "../components/LoginForm";
import Title from "../components/Title";

const Login = () => {
    // Static text values


    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="mt-20 max-w-2xl w-full md:w-10/12 lg:w-8/12">
                
                {/* Title Section */}
                <section aria-labelledby="contact-title">
                    
                    <Title id="contact-title" className="mb-8 text-center">
                        Login
                    </Title>
            
                </section>

                {/* Contact Form */}
                <section aria-labelledby="contact-form">
                    <LoginForm className="flex flex-col items-center w-full" />
                </section>

            </div>
        </main>
    );
};

export default Login;
