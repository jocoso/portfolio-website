import { Link } from "react-router-dom";

import Title from "../Title";
import Paragraph from "../Paragraph";

import { timestampDateToHuman } from "../../utils/util";

// Utility function to limit content length for preview.
const PreviewContentComponent = ({ content, maxLength }) => (
    <div className="my-4">
        <Paragraph className="text-3xl">
            {content.length > maxLength
                ? `${content.slice(0, maxLength)}...`
                : content}
        </Paragraph>
    </div>
);

const CozyPost = ({ data }) => {
    const { _id, title, content, comments, datePublished } = data;

    return (
        <Link to={`/post/${_id}`} aria-label={`Read post titled ${title}`}>
            <article
                id="blog-post"
                role="article"
                className="flex flex-col h-full w-full md:w-3/4 p-10 mb-10 bg-primary border-8 border-opacity-80 border-darkbrown rounded-3xl shadow-lg justify-between overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl shadow-[rgba(0,0,0,0.5)] mx-auto"
            >
                {/* Header */}
                <header className="flex flex-row justify-between items-center mb-4">
                    <Title tier={4}>{title}</Title>
                    <Title tier={6} className="text-3xl">
                        Published On: {timestampDateToHuman(datePublished)}
                    </Title>
                </header>

                {/* Content Preview */}
                <PreviewContentComponent content={content} maxLength={150} />

                {/* Footer */}
                <footer className="mt-auto">
                    <Paragraph className="text-xl">
                        {comments.length} comments
                    </Paragraph>
                </footer>
            </article>
        </Link>
    );
};

export default CozyPost;
