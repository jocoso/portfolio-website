//
import { Link } from "react-router-dom";

const socialLinks = [
    {
        href: "https://github.com/jocoso",
        label: "Github",
        iconClass: "fab fa-github-square",
    },
    {
        href: "https://x.com/Jocoso_Code",
        label: "Twitter",
        iconClass: "fab fa-twitter-square",
    },
    {
        href: "https://www.instagram.com/jocoso_code",
        label: "Instagram",
        iconClass: "fab fa-instagram",
    },
    {
        href: "https://www.linkedin.com/in/jocoso5273/",
        label: "LinkedIn",
        iconClass: "fab fa-linkedin",
    },
];

const sanitizeLabel = (label) => {
    return label.toLowerCase().replace(/\s+/g, "-");
};

// Local components.
const QuickLinksSectionComponent = () => (
    <nav className="flex flex-col space-y-2">
        <h3 className="font-bold text-lg">Quick Links</h3>
        {[
            { name: "About Me", home: true },
            { name: "Projects" },
            { name: "Art" },
            { name: "Blog" },
            { name: "Contact Me" },
        ].map((label, idx) => (
            <Link
                key={idx}
                to={`/${label.home ? "" : sanitizeLabel(label.name)}`}
                className="hover:underline"
            >
                {label.name}
            </Link>
        ))}
    </nav>
);
const SocialMediaSectionComponent = () => (
    <div className="flex flex-col space-y-2">
        <h3 className="font-bold text-lg">Follow Me</h3>
        <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map(({ href, label, iconClass }) => (
                <a
                    key={label}
                    href={href}
                    aria-label={`Follow me on ${label}`}
                    className="hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i
                        className={`${iconClass} text-2xl`}
                        aria-hidden="true"
                    ></i>
                </a>
            ))}
        </div>
    </div>
);
const StayConnectedSectionComponent = () => (
    <div className="flex flex-col space-y-2">
        <h3 className="font-bold text-lg">Stay Connected</h3>
        <p>
            &copy; {new Date().getFullYear()} Joshua Code. All rights reserved.
        </p>
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-darkbrown text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                
                <QuickLinksSectionComponent />
                <SocialMediaSectionComponent />
                <StayConnectedSectionComponent />

            </div>
        </footer>
    );
};

export default Footer;
