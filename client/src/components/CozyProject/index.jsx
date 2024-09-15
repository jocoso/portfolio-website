import Title from "../Title";
import Paragraph from "../Paragraph";

const CozyProject = ({ projectData }) => {
    const logoUri = `/assets/${projectData.images[0]}`;
    

    const truncatedText = (text) => {
        return text.length > 100 ? text.substring(0, 70) + "..." : text;
    };
    return (
        <main>
            <Title>{projectData.title}</Title>
            <img src={logoUri} alt={projectData.title} />
            <Paragraph>
                {truncatedText(projectData.content)}
            </Paragraph>
        </main>
    );
};

export default CozyProject;
