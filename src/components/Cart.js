import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
    // ALWAYS SUBSCRIBE THE SMALL PORTION OF THE STORE
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="cart">
            <h1 className="cart-name">Cart</h1>
            <div>
                <button className="clear-cart-button" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && (
                    <h1 className="cart-empty">Cart is Empty. Add Items to the cart!</h1>
                )}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;