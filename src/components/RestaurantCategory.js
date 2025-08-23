import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

    const handleClick = () => {
        console.log("clicked");
    }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        <span className="accordion-title">{data.title} ({data.itemCards.length})</span>
        <span className="accordion-icon">⬇️</span>
      </div>

        <ItemList className="accordion-content" items={data.itemCards}/>
      
    </div>
  );
};

export default RestaurantCategory;
