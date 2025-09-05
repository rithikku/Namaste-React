import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

const AppStore = configureStore({
    reducer : {
        cart: cartReducer,
    },
});

export default AppStore;