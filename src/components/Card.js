const Card = ({res}) => {
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo
    } = res;

    return (
        <div className="res-card">
            <div className="res-img">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
                    alt={name}
                />
            </div>

            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>

            <div className="res-details">
                <span>⭐ {avgRating}</span>
                <span>{costForTwo}</span>
                <span>30 mins</span>
            </div>
        </div>
    );
};

export default Card;
