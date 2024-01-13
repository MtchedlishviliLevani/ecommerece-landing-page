import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import cartReducer from "../redux/cartSlice";
import sliderReducer from "../redux/sliderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    slider: sliderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
