import { useQuery } from '@apollo/client';

const Navbar = ({ items }) => {
    return (
        <main>
            <ul id='navbar'>
                {
                    items.map(item => {
                        return (<li key={item.id}>
                            <a href={item.route}>
                                {item.name}
                            </a>
                        </li>);
                    })
                }
            </ul>
        </main>
    )
};

export default Navbar;