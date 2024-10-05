import ContactMeForm from "../components/ContactMeForm";
import Title from "../components/Title";

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="mt-20 max-w-2xl w-full md:w-10/12 lg:w-8/12">
                {/* Title Section */}
                <Title className="mb-8 text-center">Contact Me</Title>

                {/* Optional description or introduction */}
                <p className="text-center text-lg mb-6">
                    I'm always open to discussing new opportunities,
                    collaborations, or just a friendly chat. Feel free to reach
                    out to me through the form below.
                </p>

                {/* Contact Form */}
                <ContactMeForm className="flex flex-col items-center w-full" />
            </div>
        </main>
    );
};

export default Home;
