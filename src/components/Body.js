import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import ShimmerCard from "./ShimmerCards";

const Body = () => {
    // Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // Optional Chaning 
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants.length === 0? <ShimmerCard/> : ( // Ternary operator
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // Filter logic here 
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    )
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">

                {listOfRestaurants.map(restaurant => 
                  <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
                )}

            </div>
        </div>
    );
};

export default Body;