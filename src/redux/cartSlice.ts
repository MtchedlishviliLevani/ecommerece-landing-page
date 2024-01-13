import { createSlice } from "@reduxjs/toolkit";

export interface cartTypes {
  isShowedCartBox: boolean;
  isItem: boolean;
  isShowedAmount: boolean;
  amountItem: number;
}
const initialState: cartTypes = {
  isShowedCartBox: false,
  isItem: true,
  isShowedAmount: false,
  amountItem: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsShowedCartBox: (state, action) => {
      state.isShowedCartBox = action.payload;
    },
    setIsItem: (state, action) => {
      state.isItem = action.payload;
    },
    setIsShowedAmount: (state, action) => {
      state.isShowedAmount = action.payload;
    },
    setIsAmount: (state, action) => {
      state.isItem = action.payload;
    },
    setAmountItem: (state, action) => {
      state.amountItem = action.payload;
    },
  },
});

export const {
  setIsShowedCartBox,
  setIsItem,
  setIsShowedAmount,
  setAmountItem,
} = cartSlice.actions;
export default cartSlice.reducer;
