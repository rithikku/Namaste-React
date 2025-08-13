import { LOGO_URL, CART_URL } from "../utils/constants";

import { useEffect, useState } from "react";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    // if dependency is [btnNameReact, or something is given] => called everytime btnNameReact is updated
    useEffect(() =>{
        console.log("UseEffect Called")
    }, [setBtnNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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