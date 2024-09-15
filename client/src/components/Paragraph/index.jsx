import { useQuery } from '@apollo/client';

// Replaces p to keep style consistent
const Paragraph = ({ children, style={}, className='' }) => {
    return (
        <main>
            <p style={ style } className={ className }>{ children }</p>
        </main>
    )
};

export default Paragraph;