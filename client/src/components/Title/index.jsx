
// Replaces h1, h2, h3, h4, h5, h6 to keep the a general theme
const Title = ({ children, style={}, className='' }) => {
    return (
        <main>
            <h1 style={ style } className={ className }>{ children }</h1>
        </main>
    )
};

export default Title;