const QueryList = ({
    items = [],
    Component,
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    className = "",
    onClick = () => {},
}) => {
    if (!items.length) {
        return <h3>Nothing to look here.</h3>;
    }

    return (
        <div className={className}>
            {items.map((item) => (
                <Component
                    key={item._id}
                    data={item}
                    onMouseEnter={() => onMouseEnter(item)}
                    onMouseLeave={() => onMouseLeave(item)}
                    onClick={() => onClick(item)}
                />
            ))}
        </div>
    );
};

export default QueryList;
