import Title from "../Title";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";

const CozyPost = ({ data }) => {
    const { _id, title, content, comments, datePublished } = data;

    const rawDate = new Date(datePublished);
    const date = `${rawDate.getMonth() + 1}-${rawDate.getDate()}-${rawDate.getFullYear()}`;
    return (
        <main>
            <Link to={`/post/${_id}`}>
                <Title>{title}</Title>
                <Title>{date}</Title>
                <Paragraph>{content}</Paragraph>
                <Paragraph>{comments.length} comments</Paragraph>
            </Link>
        </main>
    );
};

export default CozyPost;
