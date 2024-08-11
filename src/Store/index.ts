import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./Slice/uiSlice/uiSlice";
import authSlice from "./Slice/authSlice/authSlice";
import restrantSlice from "./Slice/restrantSlice/restrantSlice";
import cartSclice from "./Slice/cartSlice/cartSclice";
import searchSlice from "./Slice/searchSlice/searchSlice";



const store=configureStore({

    reducer:{
        ui:uiSlice,
        auth:authSlice,
        restrants:restrantSlice,
        cart:cartSclice,
        search:searchSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



export default store;