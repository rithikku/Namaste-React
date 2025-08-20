import ShimmerCard from "../components/ShimmerCards"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
          <li key={item.card.info.id}> {item.card.info.name} - RS {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
