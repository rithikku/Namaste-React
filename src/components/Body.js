import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import ShimmerCard from "./ShimmerCards";

import { Link } from "react-router-dom";

const Body = () => {
    // Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const[filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);

        // Optional Chaning 
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    return listOfRestaurants.length === 0? <ShimmerCard/> : ( // Ternary operator
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-button" onClick={() => {
                        
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                    );
                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    // Filter logic here 
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    )
                    setFilteredRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">

                {filteredRestaurant.map(restaurant => 
                  <Link className="removeLine" key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData = {restaurant}/></Link>
                )}

            </div>
        </div>
    );
};

export default Body;