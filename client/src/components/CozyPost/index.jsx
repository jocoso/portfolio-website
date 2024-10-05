import Title from "../Title";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";

const CozyPost = ({ data }) => {
    const { _id, title, content, comments, datePublished } = data;

    const rawDate = new Date(datePublished);
    const date = rawDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // Limit content length for preview
    const previewContent =
        content.length > 150 ? content.slice(0, 150) + "..." : content;

    return (
        <Link to={`/post/${_id}`} aria-label={`Read post titled ${title}`}>
            {/* Post */}
            <div
                id="blog-post"
                role="article"
                className="
                    flex 
                    flex-col 
                    h-full 
                    w-full 
                    md:w-3/4 
                    p-10 
                    mb-10
                    bg-primary 
                    border-8 
                    border-opacity-80 
                    border-darkbrown 
                    rounded-3xl 
                    shadow-lg 
                    justify-between 
                    overflow-hidden 
                    transition 
                    transform 
                    hover:scale-105 
                    hover:shadow-2xl 
                    shadow-[rgba(0,0,0,0.5)] 
                    mx-auto
                "
            >
                {/* Header */}
                <div
                    id="post-header"
                    className="flex flex-row justify-between items-center"
                >
                    <Title id="header-title" tier={4}>
                        {title}
                    </Title>
                    <Title id="header-date" tier={6}>
                        <span className="text-3xl">Published On: </span> {date}
                    </Title>
                </div>

                {/* Content */}
                <div id="post-content" className="my-4">
                    <Paragraph className="text-3xl">{previewContent}</Paragraph>
                </div>

                {/* Footer */}
                <div id="post-footer" className="mt-auto">
                    <Paragraph id="footer-comment_count" className="text-xl">
                        {comments.length} comments
                    </Paragraph>
                </div>
            </div>
        </Link>
    );
};

export default CozyPost;
