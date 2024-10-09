// Components
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import CozyButton from "../components/CozyButton";
import CozyImage from "../components/CozyImage";

// Assets
import Avatar from "../assets/portfolio-avatar-img.svg";

const About = () => {
    const containerClass = "flex justify-center items-center w-full";
    const textContainerClass =
        "flex flex-col justify-center items-center text-center w-10/12 mx-auto";
    const imageClass = "w-3/4 md:w-full h-auto"; // Responsive image width

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
            <div className={containerClass}>
                <CozyImage
                    className={imageClass}
                    uri={Avatar}
                    alt="Portrait of Josh"
                    loading="lazy" // Lazy load for performance optimization
                />
            </div>
            <div className={textContainerClass}>
                <Title>About Me</Title>
                <Paragraph className="text-xl md:text-3xl mt-4">
                    My name is <span className="text-meditation">Josh</span>. I
                    am a developer, an artist, and a teacher.
                </Paragraph>
                <CozyButton
                    className="mt-8 md:mt-12 px-6 py-3 md:px-8 md:py-4"
                    aria-label="Download Resume"
                >
                    Download My Resume
                </CozyButton>
            </div>
        </section>
    );
};

export default About;
