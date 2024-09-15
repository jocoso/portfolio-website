// Libraries
import { useQuery } from '@apollo/client';

// Components
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import CozyButton from '../components/CozyButton';

// Assets
import Avatar from '../assets/portfolio-avatar-img.svg';

const About = () => {
    return (
        <main>
            <h1>About Me</h1>
            <img src={Avatar} alt="" />
            <Title header={1}>About Me</Title>
            <Paragraph>
                My name is <span>Josh</span>. I am a developer, an artist and a teacher.
            </Paragraph>
            <CozyButton>Download My Resume</CozyButton>
        </main>
    )
};

export default About;