const CozyArt = ({ data }) => {
    const logoUri = `/assets/${data.image}`;
    
    return (
        <main>
            <img src={logoUri} alt={data.title} />
            <p>{ data.description }</p>
        </main>
    );
};

export default CozyArt;
