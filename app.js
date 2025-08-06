import React, { Component } from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaruant Container
 *      - Restaurant Card
 *          - Cards 
 *          - Images
 *          - Res Name
 *          - Star Rating
 *          - Cuisine
 *          - Price
 *          - Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 * - Contact
 */

// Header Component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img className="cart-logo" src="https://img.icons8.com/?size=160&id=QVQY51sDgy1I&format=png"/></li>
                    <li><button className="login-button">Login</button></li>
                </ul>
            </div>
        </div>
    )
}

// Restaurant Card Component 
const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-card-img" src="https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?_gl=1*bjey0s*_ga*NTM5ODI2MTU3LjE3NTE2MTc3ODM.*_ga_8JE65Q40S6*czE3NTQ0NTg2MTMkbzMkZzEkdDE3NTQ0NTg2MjMkajUwJGwwJGgw"></img>
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}

// Body Component

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <label></label>
                <input type="search" className="search"></input>
                <button>Search</button>
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);