

//
// Topbar Component with clickable Icon
//

// Import icon image asset
import iconLogo from '../../assets/icon.png';

const Topbar = () => {
    // Clickable icon component aligned based on orientation
    const Icon = ({ src, orientation="left", href='/' }) => {
        // Map orientation prop to justification classes
        const justClass = {
            left: "justify-start",
            center: "justify-center",
            right: "justify-end",
        }[orientation] || "justify-start";

        return (
            <div className={`h-full w-full p-1 flex ${justClass}`}>
                <a href={href}>
                    <img src={src} className="h-full" alt="icon"/>
                </a>
            </div>
        );

    }

    return (
        // Navigation bar container stayled with flex and dark grey background
        <nav className="flex w-full h-10 bg-gray-900">
            {/* Render icon with default left alignment and link to "/" */}
            <Icon 
                src={iconLogo} 
            />
        </nav>
    );
};

export default Topbar;
