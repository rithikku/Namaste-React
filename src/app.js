import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ContactUs from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";  
import AppStore from "./utils/AppStore";

const AppLayout = () => {
    
    const [userName, setUserName] = useState();
    
    // AUTHENTICATION CODE
    useEffect(() => {
        // MAKE AN API CALL AND SEND USERNAME AND PASSWORD
        const data = {
            name: "Rithik Kumar"
        };
        setUserName(data.name);
    });


    return (
        <Provider store={AppStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loding...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
        ],
        errorElement : <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);