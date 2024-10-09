import Title from "../Title";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";

// Utility function to format the date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

// Utility function to limit content length for preview
const getPreviewContent = (content, maxLength = 150) => {
    return content.length > maxLength
        ? `${content.slice(0, maxLength)}...`
        : content;
};

const CozyPost = ({ data }) => {
    const { _id, title, content, comments, datePublished } = data;

    return (
        <Link to={`/post/${_id}`} aria-label={`Read post titled ${title}`}>
            <article
                id="blog-post"
                role="article"
                className="flex flex-col h-full w-full md:w-3/4 p-10 mb-10 bg-primary border-8 border-opacity-80 border-darkbrown rounded-3xl shadow-lg justify-between overflow-hidden transition transform hover:scale-105 hover:shadow-2xl shadow-[rgba(0,0,0,0.5)] mx-auto"
            >
                {/* Header */}
                <header
                    id="post-header"
                    className="flex flex-row justify-between items-center"
                >
                    <Title id="header-title" tier={4}>
                        {title}
                    </Title>
                    <Title id="header-date" tier={6}>
                        <span className="text-3xl">Published On: </span>{" "}
                        {formatDate(datePublished)}
                    </Title>
                </header>

                {/* Content */}
                <div id="post-content" className="my-4">
                    <Paragraph className="text-3xl">
                        {getPreviewContent(content)}
                    </Paragraph>
                </div>

                {/* Footer */}
                <footer id="post-footer" className="mt-auto">
                    <Paragraph id="footer-comment_count" className="text-xl">
                        {comments.length} comments
                    </Paragraph>
                </footer>
            </article>
        </Link>
    );
};

export default CozyPost;
