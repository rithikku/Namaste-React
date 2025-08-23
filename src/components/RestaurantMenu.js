import ShimmerCard from "../components/ShimmerCards"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerCard />;

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;


  // CATEGORIES 
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log(categories);

  return (
    <div className="menu">
      <h1 className="card-title">{name}</h1>
      <p className="card-category">{cuisines}</p>

      {/* CATEGORIES Accordions  */}
      {categories.map((category) => 
        <RestaurantCategory data= {category?.card?.card}/>
      )}
    </div>
  );
};

export default RestaurantMenu;
