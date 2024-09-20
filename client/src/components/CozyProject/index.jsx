import Title from "../Title";
import Paragraph from "../Paragraph";
import CozyImage from "../CozyImage";
import { Link } from "react-router-dom";

const CozyProject = ({ data }) => {
    const { _id, title, content, images } = data;
    const logoUri = `/assets/${images[0]}`;

    const truncatedText = (text) => {
        return text.length > 100
            ? text.split(" ").slice(0, 12).join(" ") + "..."
            : text;
    };
    return (
        <Link to={`/projects/${_id}`} className="w-8/12 col-span-1">
            <div className="min-h-full w-full p-6 bg-primary border border-darkbrown rounded-lg shadow-lg flex flex-col justify-between transition transform hover:scale-105 hover:shadow-2xl">
                <Title className="my-3" tier={5}>{title}</Title>
                <CozyImage className="" uri={logoUri || "https://via.placeholder.com/150"} alt={title} />
                <Paragraph className="text-lg my-5">{truncatedText(content)}</Paragraph>
            </div>
        </Link>
    );
};

export default CozyProject;
