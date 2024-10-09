import ContactMeForm from "../components/ContactMeForm";
import Title from "../components/Title";

const Home = () => {
    // Static text values
    const descriptionText =
        "I'm always open to discussing new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me through the form below.";

    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="mt-20 max-w-2xl w-full md:w-10/12 lg:w-8/12">
                {/* Title Section */}
                <section aria-labelledby="contact-title">
                    <Title id="contact-title" className="mb-8 text-center">
                        Contact Me
                    </Title>

                    {/* Optional description or introduction */}
                    <p className="text-center text-lg mb-6">
                        {descriptionText}
                    </p>
                </section>

                {/* Contact Form */}
                <section aria-labelledby="contact-form">
                    <ContactMeForm className="flex flex-col items-center w-full" />
                </section>
            </div>
        </main>
    );
};

export default Home;
