import { LOGO_URL} from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    
    const onlineStatus = useonlineStatus();

    const {loggedInUser} = useContext(UserContext); 

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul> 
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>                  
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link> </li>
                    <li> <Link to="/contact">Contact Us</Link> </li>
                    <li> <Link to="/grocery">Grocery</Link> </li>
                    <li> <Link to="/cart">Cart - ({cartItems.length} Items)</Link> </li>
                    <li><button className="login-button" onClick={() => {
                       btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button></li>
                    <li>{loggedInUser}</li> 
                </ul>
            </div>
        </div>
    );
};

export default Header;