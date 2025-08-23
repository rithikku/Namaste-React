import { FOOD_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;

    // destructuring
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.info;

    return (
        <div className="res-card">
            <img className="res-card-img" src= {FOOD_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};

// Higher order Component 

// input - RestaurantCard ==> RestaurantCardPromoted

export const isOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="open">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;