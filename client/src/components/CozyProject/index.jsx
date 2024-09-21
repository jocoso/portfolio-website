import Title from "../Title";
import Paragraph from "../Paragraph";
import CozyImage from "../CozyImage";
import { Link } from "react-router-dom";

const CozyProject = ({ data }) => {
    const { _id, title, content, images } = data;
    const logoUri = `/assets/${images[0]}`;

    const truncatedText = (text) => {
        return text.length > 100
            ? text.split(" ").slice(0, 12).join(" ") + "..."
            : text;
    };
    return (
        <Link
            to={`/projects/${_id}`}
            className="w-full h-auto min-h-[600px] text-center align-middle"
        >
            {/* Card */}
            <div className="
                flex 
                flex-col 
                h-full 
                w-full 
                p-3 
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
                shadow-black
            ">
                
                {/* Title */}
                <div className="
                    h-1/6 
                    w-full 
                    flex 
                    justify-center 
                    self-start 
                    overflow-hidden
                ">

                    {/* Border Decor */}
                    <div className="
                        border-4 h-2/3 
                        bg-darkbrown  
                        border-accent
                        w-full 
                        rounded-full 
                        pt-2 
                        flex 
                        items-center
                    ">

                        <Title
                            className="ml-10 text-center max-h-full max-w-full text-accent"
                            tier={6}
                        >
                            {title}
                        </Title>
                    
                    </div>

                </div>

                {/* Image / Logo */}
                <div className="
                    h-3/6 
                    w-full 
                    flex 
                    justify-center 
                    items-center 
                    overflow-hidden
                ">

                    <CozyImage
                        className="max-h-full max-w-full object-contain"
                        uri={logoUri}
                        alt={title}
                    />

                </div>

                {/* Description */}
                <div className="
                    h-2/6 
                    w-full 
                    flex 
                    justify-center 
                    items-center 
                    overflow-hidden
                ">

                    <Paragraph className="text-3xl max-h-full max-w-full">
                        {truncatedText(content)}
                    </Paragraph>

                </div>
            </div>
        </Link>
    );
};

export default CozyProject;
