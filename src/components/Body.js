import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockdata"

import { useState } from "react";

const Body = () => {
    // Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // Filter logic here 
                    setListOfRestaurants()
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    )
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">

                {listOfRestaurants.map(restaurant => 
                  <RestaurantCard key = {restaurant.data.id} resData = {restaurant}/>
                )}

            </div>
        </div>
    );
};

export default Body;