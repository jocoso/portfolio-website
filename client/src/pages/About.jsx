//
import ScrollLink from "../components/ScrollLink";
import Avatar from '../assets/portfolio-avatar-img.webp';
import Art1 from '../assets/art1.png';

// About Page
const About = () => {
    return (
        <section className="w-full">
            
            <ScrollLink src={Avatar} orientation="right" href="/" title="About" className="pb-4">
                Want to know more about me and my work? Click here.
            </ScrollLink>

            <ScrollLink src={Art1} orientation="left" href="/" title="Art">
                Click here to see my art.
            </ScrollLink>
            
        </section>
    );
};

export default About;