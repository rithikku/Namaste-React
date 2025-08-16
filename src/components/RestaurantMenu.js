import { useState, useEffect } from "react";
import ShimmerCard from "../components/ShimmerCards"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId); // fetching api

    const json = await data.json();
    console.log(json);
    setResInfo(json.data); // Swiggy pe jake delhlo..
  };

  if (resInfo === null) return <ShimmerCard />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1 className="card-title">{name}</h1>
      <p className="card-category">{cuisines}</p>
      <p className="card-price">{costForTwoMessage}</p>
      <ul className="card-menu">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - RS {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
