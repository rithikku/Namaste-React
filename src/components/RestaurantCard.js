import { FOOD_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;

    // destructuring
    const {name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;

    return (
        <div className="res-card">
            <img className="res-card-img" src= {FOOD_URL}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100} For Two</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;