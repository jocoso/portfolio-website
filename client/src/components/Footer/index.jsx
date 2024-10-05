import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-darkbrown text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                {/* Section 1: Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-bold text-lg">Quick Links</h3>
                    <Link to="/about" className="hover:underline">
                        About Us
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                    <Link to="/terms" className="hover:underline">
                        Terms of Service
                    </Link>
                    <Link to="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                </div>

                {/* Section 2: Social Media */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-bold text-lg">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a
                            href="https://facebook.com"
                            aria-label="Facebook"
                            className="hover:text-accent"
                        >
                            <i className="fab fa-facebook-square text-2xl"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            aria-label="Twitter"
                            className="hover:text-accent"
                        >
                            <i className="fab fa-twitter-square text-2xl"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            aria-label="Instagram"
                            className="hover:text-accent"
                        >
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            aria-label="LinkedIn"
                            className="hover:text-accent"
                        >
                            <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                    </div>
                </div>

                {/* Section 3: Copyright */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-bold text-lg">Stay Connected</h3>
                    <p>
                        &copy; {new Date().getFullYear()} My Company. All rights
                        reserved.
                    </p>
                    <p>1234 Street Name, City, Country</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
/*  */
