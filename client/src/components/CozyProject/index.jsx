//
import { Link } from "react-router-dom";
// Importing components...
import Paragraph from "../Paragraph";
import CozyImage from "../CozyImage";
// Utility function that returns the user logging status.
import { isLoggedIn } from "../../utils/util";

const CozyProject = ({ data, onDelete }) => {
    const { _id, title, content, images } = data;
    // Utility function to get logo URI with fallback.
    const getLogoUri = () =>
        images.length ? images[0] : "https://via.placeholder.com/150";

    // Local components.
    const HeaderComponent = ({ title }) => (
        <header className="mb-3 flex justify-center items-center">
            <div className="border-4 h-16 bg-darkbrown border-accent w-full rounded-full flex items-center justify-center">
                <h2 className="text-accent text-2xl md:text-3xl">{title}</h2>
            </div>
        </header>
    );
    const ProjectImageComponent = ({ uri, alt }) => (
        <div className="mb-4 flex justify-center items-center">
            <CozyImage
                className="max-h-full max-w-full object-contain"
                uri={uri}
                alt={alt}
            />
        </div>
    );
    const ContentComponent = ({ content }) => (
        <div className="flex justify-center items-center">
            <Paragraph className="text-lg md:text-xl line-clamp-3">
                {content}
            </Paragraph>
        </div>
    );
    const DeleteButtonComponent = () => (
        <button
                    onClick={onDelete}
                    className="inline-block px-4 py-2 mt-4 text-white bg-red-600 rounded-md shadow hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300 cursor-pointer"
                    aria-label="Delete project"
                >
                    Delete
                </button>
    );

    return (
        <div className="flex flex-col items-center">

            {/* Redirects to singleProjects/_id. */}
            <Link
                to={`/projects/${_id}`}
                aria-label={`View project titled ${title}`}
                className="w-full h-auto text-center"
            >
                <HeaderComponent title={title} />
                <article className="flex flex-col h-full w-full p-3 bg-primary border-8 border-opacity-80 border-darkbrown rounded-3xl shadow-lg justify-between overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl min-h-[600px] md:min-h-[500px]">
                    <ProjectImageComponent uri={getLogoUri()} alt={title} />
                    <ContentComponent content={content} />
                </article>

            </Link>

            {/* Delete Button for Logged-in Users */}
            {isLoggedIn() && <DeleteButtonComponent />}
        </div>
    );
};

export default CozyProject;
