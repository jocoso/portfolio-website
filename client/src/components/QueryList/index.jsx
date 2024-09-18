const QueryList = ({ items = [], Component }) => {

    if(!items.length) {
        return <h3>Nothing to look here.</h3>;
    }

    return(
        <>
            <div>
                {items &&
                    items.map((item) => {
                        return <Component key={item._id} data={item} />
                    })
                }
            </div>
        </>
    );
};

export default QueryList;