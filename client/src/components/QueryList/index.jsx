// Given a list of items and a component type make a list of these components...
// and render them.
const QueryList = ({
    items = [],
    Component,
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    onDelete = () => {},
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
                    onDelete={() => onDelete(item)}
                />
            ))}
        </div>
    );
};

export default QueryList;
