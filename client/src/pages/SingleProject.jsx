import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { QUERY_SINGLE_PROJECT } from "../utils/queries";
import Title from "../components/Title";
import CozyImage from "../components/CozyImage";

// Loading and Error Components
const Loading = () => <div className="w-10 text-center mt-10">Loading...</div>;

const Error = ({ message }) => (
    <div className="text-center text-red-500 mt-10">
        Error loading project: {message}
    </div>
);

const SingleProject = () => {
    const { projectId } = useParams();
    const { loading, error, data } = useQuery(QUERY_SINGLE_PROJECT, {
        variables: { projectId },
    });

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    const project = data?.project || {};
    const { title, images, content } = project;

    return (
        <div className="w-full flex flex-col items-center">
            <div className="mt-36 w-3/4 flex flex-col items-center">
                {/* Back Button */}
                <Link
                    to="/projects"
                    className="ml-4 mb-4 px-5 pt-3 pb-1 rounded-lg font-ramaraja text-3xl bg-darkbrown text-accent shadow-lg font-semibold hover:shadow-2xl focus:right-4 focus:ring-green-200 transition duration-500"
                >
                    &lt; Back
                </Link>

                {/* Project Title */}
                <Title tier={3} className="w-full text-center bg-primary py-5">
                    {title}
                </Title>

                {/* Project Image */}
                <CozyImage
                    className="my-10 h-96 w-96 object-contain"
                    uri={
                        images.length
                            ? `/assets/${images[0]}`
                            : "/assets/placeholder.jpg"
                    }
                    alt={title}
                />

                {/* Project Content */}
                <div className="max-w-2xl text-center">
                    <blockquote className="p-6 bg-gray-100 border-l-4 border-indigo-500 italic">
                        {content}
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
