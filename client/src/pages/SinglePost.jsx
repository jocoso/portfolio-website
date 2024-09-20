import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import QueryList from "../components/QueryList";
import CozyComment from "../components/CozyComment";

import { QUERY_SINGLE_POST } from "../utils/queries";

const SinglePost = () => {
    const { postId } = useParams();
    //alert(postId)
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId },
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    const { author, comments, content, datePublished, title } = post;
    const rawDate = new Date(datePublished);
    const date = `${rawDate.getMonth()}-${rawDate.getDate()}-${rawDate.getFullYear()}`

    const updatedComments = comments.map(comment => {
        return { ...comment, _id: comment.date };  // Create a copy of each comment and modify _id
    });

    return (
        <div>
            <Link to={`/projects/`}> {`< Back`} </Link>
            <h3>
                {title} written by {author.name || "Unknown Author"}
                <br />
                <span>had this thought on {date}</span>
            </h3>
            <div>
                <blockquote
                    className="p-4"
                    style={{
                        fontSize: "1.5rem",
                        fontStyle: "italic",
                        border: "2px dotted #1a1a1a",
                        lineHeight: "1.5",
                    }}
                >
                    {content}
                </blockquote>
            </div>

            <div className="my-5">
                <QueryList items={updatedComments} Component={CozyComment} />
            </div>
        </div>
    );
};

export default SinglePost;
