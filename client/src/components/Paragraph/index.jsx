
// Replaces p to keep style consistent
const Paragraph = ({ children, style={}, className='' }) => {
    return (
        <main>
            <p style={ style } className={ `${className} font-normal text-darkBrown font-ramaraja` }>{ children }</p>
        </main>
    )
};

export default Paragraph;