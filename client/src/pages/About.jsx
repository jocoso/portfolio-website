//
import Title      from "../components/Title";
import Paragraph  from "../components/Paragraph";
import CozyButton from "../components/CozyButton";
import CozyImage  from "../components/CozyImage";

// Importing Assets...
import Avatar from "../assets/portfolio-avatar-img.webp";
import resume from "../assets/Joshua.Collado.Resume.pdf";

// About Page
const About = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
            
            {/* Image Container */}
            <div className="flex justify-center items-center w-full">
                <CozyImage 
                    className="w-3/4 md:w-full max-w lg h-auto"
                    uri={Avatar}
                    alt="Portrait of a man reading a book in front of a window."
                    loading="lazy" // Performance optimizations
                />
            </div>

            {/* Text Container */}
            <div className="flex flex-col justify-center items-center text-center w-10/12 mx-auto">
                <Title>About Me</Title>
                <Paragraph className="text-xl md:text-3xl mt-4">
                    My name is <span className="text-meditation">Josh</span>. I am a developer, an artist, and a teacher.
                </Paragraph>
                {/* Download Resume Button */}
                <CozyButton 
                    className="mt-8 md:mt-12 px-6 py-3 md:px-8 md:py-4"
                    aria-label="Download my resume in PDF format"
                    download
                    href={resume}
                >
                    Download My Resume
                </CozyButton>
            </div>
            
        </section>
    );
};

export default About;