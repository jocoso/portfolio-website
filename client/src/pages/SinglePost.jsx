//
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

// Importing components...
import QueryList from "../components/QueryList";
import CozyComment from "../components/CozyComment";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

// Importing GraphQL query...
import { QUERY_SINGLE_POST } from "../utils/queries";

// Utility function to format dates.
import { timestampDateToHuman } from "../utils/util.js";

// Creating local Components.
const LoadingComponent = () => (
    <div className="text-center mt-10">Loading...</div>
);
const ErrorComponent = ({ message }) => (
    <div className="text-center text-red-500 mt-19">
        Error loading post: {message}.
    </div>
);

const SinglePost = () => {
    const { postId } = useParams();

    // Looking for the post to display.
    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId },
    });

    // Return early for loading or error states.
    if (loading) return <LoadingComponent />;
    if (error) return <ErrorComponent message={error.message} />;

    // Destructure post data with fallback values.
    const {
        author = { name: "Unknown Author" },
        comments = [],
        content,
        datePublished,
        title,
    } = data?.post || {};
    const formattedDate = timestampDateToHuman(datePublished);

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Redirect to Blog page. */}
            <Link
                to="/blog"
                className="text-indigo-600 hover:underline mb-6 block"
            >
                &lt; Back
            </Link>

            {/* Post Header */}
            <Title tier="2" className="mb-4">
                {title} <span className="text-xl">by {author.name}</span>
            </Title>
            <Paragraph className="text-gray-500">
                Posted on {formattedDate}
            </Paragraph>

            {/* Post Content. */}
            <div className="bg-white p-6 border rounded-lg shadow-md my-6">
                <blockquote
                    className="text-2xl italic border-l-4 border-indigo-600 pl-4"
                    style={{ lineHeight: "1.8" }}
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
                    <QueryList items={comments} Component={CozyComment} />
                ) : (
                    <Paragraph>No comments yet. Be the first!</Paragraph>
                )}
            </div>
        </div>
    );
};

export default SinglePost;
