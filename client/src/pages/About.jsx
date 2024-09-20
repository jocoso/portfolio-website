// Components
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import CozyButton from "../components/CozyButton";
import CozyImage from "../components/CozyImage";

// Assets
import Avatar from "../assets/portfolio-avatar-img.svg";

const About = () => {
    return (
        <div className="grid grid-cols-2 min-h-screen w-full">
            <div className="flex justify-center items-center w-full">
                <CozyImage style={{width:"100%", height: "50%", backgroundSize: "contain"}} uri={Avatar} />
            </div>
            <div className="mx-auto text-center pt-[50%] w-8/12">
                <Title className="text-center">About Me</Title>
                <Paragraph className="text-4xl">
                    My name is <span className="text-meditation">Josh</span>. I am a developer, an artist
                    and a teacher.
                </Paragraph>
                <CozyButton className="mt-14">Download My Resume</CozyButton>
            </div>
        </div>
    );
};

export default About;
