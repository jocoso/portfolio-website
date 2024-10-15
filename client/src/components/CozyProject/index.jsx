import Paragraph from "../Paragraph";
import CozyImage from "../CozyImage";
import { Link } from "react-router-dom";

const CozyProject = ({ data }) => {
    const { _id, title, content, images } = data;

    // Utility function to get logo URI with fallback
    const getLogoUri = () =>
        images?.[0]
            ? `/assets/${images[0]}`
            : "https://via.placeholder.com/150";

    return (
        <Link
            to={`/projects/${_id}`}
            aria-label={`View project titled ${title}`}
            className="w-full h-auto text-center"
        >
            <article className="flex flex-col h-full w-full p-3 bg-primary border-8 border-opacity-80 border-darkbrown rounded-3xl shadow-lg justify-between overflow-hidden transition transform hover:scale-105 hover:shadow-2xl shadow-black min-h-[600px] md:min-h-[500px]">
                {/* Title */}
                <header className="mb-3 flex justify-center items-center overflow-hidden">
                    <div className="border-4 h-16 bg-darkbrown border-accent w-full rounded-full flex items-center justify-center">
                        <h2 className="text-accent text-2xl md:text-3xl">
                            {title}
                        </h2>
                    </div>
                </header>

                {/* Image / Logo */}
                <div className="mb-4 flex justify-center items-center overflow-hidden">
                    <CozyImage
                        className="max-h-full max-w-full object-contain"
                        uri={getLogoUri()}
                        alt={title}
                    />
                </div>

                {/* Description */}
                <div className="flex justify-center items-center overflow-hidden">
                    <Paragraph className="text-lg md:text-xl line-clamp-3">
                        {content}
                    </Paragraph>
                </div>
            </article>
        </Link>
    );
};

export default CozyProject;
