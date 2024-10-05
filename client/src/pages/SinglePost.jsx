import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import QueryList from "../components/QueryList";
import CozyComment from "../components/CozyComment";

import { QUERY_SINGLE_POST } from "../utils/queries";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

const SinglePost = () => {
    const { postId } = useParams();
    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId },
    });

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (error) {
        return (
            <div className="text-center text-red-500 mt-10">
                Error loading post: {error.message}
            </div>
        );
    }

    const post = data?.post || {};
    const { author, comments, content, datePublished, title } = post;

    const rawDate = new Date(datePublished);
    const formattedDate = `${
        rawDate.getMonth() + 1
    }-${rawDate.getDate()}-${rawDate.getFullYear()}`;

    // Ensure each comment has a unique ID (if not from the backend, we'll use the date)
    const updatedComments = comments.map((comment) => ({
        ...comment,
        _id: comment._id || comment.date, // Use _id or fallback to date if necessary
    }));

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Back Link */}
            <Link
                to="/projects"
                className="text-indigo-600 hover:underline mb-6 block"
            >
                &lt; Back
            </Link>

            {/* Post Header */}
            <Title tier={2} className="mb-4">
                {title}{" "}
                <span className="text-xl">
                    by {author.name || "Unknown Author"}
                </span>
            </Title>
            <Paragraph className="text-gray-500">
                Posted on {formattedDate}
            </Paragraph>

            {/* Post Content */}
            <div className="bg-white p-6 border rounded-lg shadow-md my-6">
                <blockquote
                    className="text-2xl italic border-l-4 border-indigo-600 pl-4"
                    style={{
                        lineHeight: "1.8",
                    }}
                >
                    {content}
                </blockquote>
            </div>

            {/* Comments Section */}
            <div className="my-10">
                <Title tier={3} className="mb-6">
                    Comments ({comments.length})
                </Title>

                {comments.length > 0 ? (
                    <QueryList
                        items={updatedComments}
                        Component={CozyComment}
                    />
                ) : (
                    <Paragraph>
                        No comments yet. Be the first to comment!
                    </Paragraph>
                )}
            </div>
        </div>
    );
};

export default SinglePost;
