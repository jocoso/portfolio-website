import Title from "../Title";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";


const CozyProject = ({ data }) => {
    const {_id, title, content, images} = data;
    const logoUri = `/assets/${images[0]}`;
    
    const truncatedText = (text) => {
        return text.length > 100 ? text.substring(0, 70) + "..." : text;
    };
    return (
        <Link to={`/projects/${_id}`}>
            <Title>{title}</Title>
            <img src={logoUri} alt={title} />
            <Paragraph>
                {truncatedText(content)}
            </Paragraph>
        </Link>
    );
};

export default CozyProject;
