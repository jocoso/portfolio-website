//
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

// Importing GraphQL query.
import { QUERY_SINGLE_PROJECT } from "../utils/queries";

// Importing components...
import Title from "../components/Title";
import CozyImage from "../components/CozyImage";

// Creating Local components...

// Displays the word 'loading' at the center of the screen.
// TODO: Make it a true component.
const LoadingComponent = () => (
    <div className="text-center mt-10">Loading...</div>
);
// Displays an error message in red letters on the page if an error is found.
const ErrorComponent = ({ message }) => (
    <div className="text-center text-red-500 mt-10">
        Error loading project: {message}
    </div>
);
// Display a button that says '<- Back'. When pressed, the button will
// direct the user to the path given.
// TODO: Make it a true component.
const NavigationalButtonComponent = ({ path, body }) => (
    <Link
        to={path}
        className="ml-4 mb-4 px-5 pt-3 pb-1 rounded-lgtext-3xl bg-darkbrown text-accent shadow-lg font-semibold hover:shadow-2xl focus:right-4 focus:ring-green-200 transition duration-500"
    >
        {body}
    </Link>
);
const ProjectImageComponent = ({ title, images }) => (
    <CozyImage
        alt={title}
        uri={
            // Either return the image in db or a placeholder.
            images.length
                ? `${images[0]}`
                : "https://via.placeholder.com/150"
        }
        className="my-10 h-96 w-96 object-contain"
    />
);

const SingleProject = () => {
    // Getting project Id and looking for its data in the database.
    const { projectId } = useParams();
    const { loading, error, data } = useQuery(QUERY_SINGLE_PROJECT, {
        variables: { id: projectId },
    });

    // Performing checks...
    if (loading) return <LoadingComponent />;
    if (error) return <ErrorComponent message={error.message} />;

    const {
        title = "Untitled Project",
        images = [],
        content = "No content available",
    } = data?.project || {};

    return (
        <div className="flex flex-col items-center w-full">
            <div className="mt-36 w-3/4 flex flex-col items-center">
                {/* Back Button. */}
                <NavigationalButtonComponent
                    path="/projects"
                    body="&lt; Back"
                />

                {/* Project Title */}
                <Title tier={3} className="w-full text-center bg-primary py-5">
                    {title}
                </Title>

                {/* Project Image (if any). */}
                <ProjectImageComponent title={title} images={images} />

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