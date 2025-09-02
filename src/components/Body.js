import RestaurantCard, { isOpenLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import ShimmerCard from "./ShimmerCards";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardOpen = isOpenLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // Optional Chaning 
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // CHECK ONLINE OFFLINE STATUS
    const onlineStatus = useonlineStatus();

    if (onlineStatus === false) return (
        <h1 className="status">Looks like you're offline!! Please check your internet Connection</h1>
    );

    const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <ShimmerCard /> : ( // Ternary operator
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
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


                {/* UPDATE NAME  */}
                <label>UserName: </label>
                <input className="search-box" value={loggedInUser} 
                onChange= {(e)=> setUserName(e.target.value)}/>
            </div>

            
            <div className="res-container">

                {filteredRestaurant.map(restaurant => (
                    <Link
                        className="removeLine" key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        {restaurant.info.isOpen ? (
                            <RestaurantCardOpen resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;