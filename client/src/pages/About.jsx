// Components
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import CozyButton from "../components/CozyButton";
import CozyImage from "../components/CozyImage";

// Assets
import Avatar from "../assets/portfolio-avatar-img.svg";

const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
            <div className="flex justify-center items-center w-full">
                <CozyImage
                    className="w-3/4 md:w-full h-auto" // Responsive image width
                    uri={Avatar}
                    alt="Portrait of Josh"
                />
            </div>
            <div className="flex flex-col justify-center items-center text-center w-10/12 mx-auto">
                <Title className="text-center">About Me</Title>
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
        </div>
    );
};

export default About;
