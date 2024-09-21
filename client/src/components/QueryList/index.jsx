const QueryList = ({ items = [], Component, onMouseEnter, onMouseLeave, className='', onClick }) => {
    if (!items.length) {
        return <h3>Nothing to look here.</h3>;
    }

    return (
        <div className={className}>
            {items &&
                items.map((item) => {
                    return (
                        <Component
                            key={item._id}
                            data={item}
                            onMouseEnter={onMouseEnter  ? () => onMouseEnter(item) : null}
                            onMouseLeave={onMouseLeave  || null}
                            onClick={ onClick || null}  
                        />
                    );
                })}
        </div>
    );
};

export default QueryList;
