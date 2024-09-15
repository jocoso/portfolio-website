import { useQuery } from '@apollo/client';
import Navbar from '../Navbar';

const Header = () => {
    const navItems = [
        {
            id: 0,
            name: 'About Me',
            route: '/',
        },
        {
            id: 1,
            name: 'Projects',
            route: '/projects',
        },
        {
            id: 2,
            name: 'Art',
            route: '/art',
        },
        {
            id: 3,
            name: 'Blog',
            route: '/blog',
        },
        {
            id: 4,
            name: 'Contact Me',
            route: '/contact-me',
        }
    ]
    return (
        <main>
            <Navbar items={navItems}/>
        </main>
    )
};

export default Header;