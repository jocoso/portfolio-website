
import React, { useState, useRef } from 'react';
import ArrowImg from '../../assets/arrow.png';

const ScrollLink = ({ src, children, title, orientation = "left", href, className = "" }) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeout = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout.current);
        // Small delay before setting hovered state to true
        hoverTimeout.current = setTimeout(() => setIsHovered(true), 100);
    }

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout.current);
        // Small delay before unhovered to avoid flicker
        hoverTimeout.current = setTimeout(() => setIsHovered(false), 100);
    }

    
    const Picture = ({ src }) => {

        const compClass = isHovered ? 'col-span-1' : 'col-span-2';

        return(
                <div 
                    className={`${compClass} relative h-full overflow-hidden transition-all duration-500 ease-in-out`}
                    style={{ transformOrigin: 'left center'}}
                >
                {/* Transparent overlay with title only when NOT hovered */}
                {!isHovered && (
                    <div 
                        className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-20 pointer-events-none ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                }`}>
                        <h2 className="text-white text-3xl font-bold text-center outline-none animate-dimlight box-reflect"> {title} </h2>
                    </div>
                )}
                    <img 
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out" 
                        src={src} 
                        alt="Scroll link"    
                    />
                </div>
        );

    }

    const Content = ({ content }) => { 
        // Show content only when hovered, occupy half width
        return(
            <a href={href} className="col-span-1 p-4 bg-white bg-opacity-70 overflow-auto flex text-xl items-center justify-center text-center">
                {content}
                <img className="w-1/6" src={ArrowImg} />
            </a>
        )

    }


    return (
        <div 
            className={`grid grid-cols-2 h-96 justify-center w-full rounded-xl overflow-hidden ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            {orientation === "left" ? (
                <>
                    <Picture src={src} />
                    {isHovered && <Content content={children} />}
                </>
            ) : (
                <>
                    {isHovered && <Content content={children} />}
                    <Picture src={src} />
                </>
            )}
        </div>
    );

};

export default ScrollLink;
