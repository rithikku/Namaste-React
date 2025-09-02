import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        <span className="accordion-title">{data.title} ({data.itemCards.length})</span>
        <span className="accordion-icon">⬇️</span>
      </div>

        {showItems && <ItemList className="accordion-content" items={data.itemCards}/>}
      
    </div>
  );
};

export default RestaurantCategory;
