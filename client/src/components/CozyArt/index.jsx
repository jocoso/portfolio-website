import CozyImage from "../CozyImage";

const CozyArt = ({ data, onMouseEnter, onMouseLeave, className='', onClick }) => {
    const logoUri = data.image ? `/assets/${data.image}` : "https://via.placeholder.com/150";
    
    return (
        <div 
            className={`
                    ${className} 
                    w-60 
                    h-60 
                    rounded-full 
                    overflow-hidden border-8 
                    hover:border-accent 
                    transition-all 
                    duration-300 
                    ease-in-out
                    cursor-pointer
            `}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <CozyImage uri={logoUri} alt={data.title}  />
        </div>
    );
};

export default CozyArt;
