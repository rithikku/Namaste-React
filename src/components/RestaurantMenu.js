import ShimmerCard from "../components/ShimmerCards"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerCard />;

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;


  // CATEGORIES 
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="menu">
      <h1 className="card-title">{name}</h1>
      <p className="card-category">{cuisines}</p>

      {/* CATEGORIES Accordions */}
      {categories.map((category, index) => 

        // Controlled Component
        <RestaurantCategory key={category?.card?.card?.title} data= {category?.card?.card}
        
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        />

      )}
    </div>
  );
};

export default RestaurantMenu;
