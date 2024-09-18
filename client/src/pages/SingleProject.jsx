import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { QUERY_SINGLE_PROJECT } from "../utils/queries";

const SinglePost = () => {
    const { projectId } = useParams();
    //alert(postId)
    const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
        variables: { projectId },
    });

    const project = data?.project || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    const { title, images, content } = project;

    return (
        <div>
            <Link to={`/projects/`}> {`< Back`} </Link>
            <h3>
                {title}
                <br />
            </h3>
            <img src={`/assets/${images[0]}`} alt={title} />
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
                    {/* TODO: Add a way to make images appear on this text in the places I want. */}
                    {content}
                </blockquote>
            </div>

        </div>
    );
};

export default SinglePost;
