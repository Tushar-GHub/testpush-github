import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
