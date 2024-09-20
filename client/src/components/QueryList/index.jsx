const QueryList = ({ items = [], Component }) => {
    if (!items.length) {
        return <h3>Nothing to look here.</h3>;
    }

    return (
        <>
            {items &&
                items.map((item) => {
                    return <Component key={item._id} data={item} />;
                })}
        </>
    );
};

export default QueryList;
