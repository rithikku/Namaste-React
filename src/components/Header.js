import { LOGO_URL, CART_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    
    const onlineStatus = useonlineStatus();

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
                    <li><img className="cart-logo" src= {CART_URL}/></li>
                    <li><button className="login-button" onClick={() => {
                       btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;