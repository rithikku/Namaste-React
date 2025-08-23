const ItemList = ({ items }) => {
    console.log(items);
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="item-card">
          <div className="item-info">
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">
              ₹{(item.card.info.defaultPrice || item.card.info.price) / 100}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
