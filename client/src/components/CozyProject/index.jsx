import Title from "../Title";
import Paragraph from "../Paragraph";

const CozyProject = ({ projectData }) => {
    console.log(projectData);

    const truncatedText = (text) => {
        return text.length > 100 ? text.substring(0, 70) + "..." : text;
    };
    return (
        <main>
            <Title>{projectData.title}</Title>
            {projectData.images.map((imgUrl) => {
                <img src={imgUrl} alt={imgUrl} />;
            })}
            <Paragraph>
                {truncatedText(projectData.content)}
            </Paragraph>
        </main>
    );
};

export default CozyProject;
