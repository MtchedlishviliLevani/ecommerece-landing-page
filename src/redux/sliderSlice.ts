import { createSlice } from "@reduxjs/toolkit";

export interface sliderStateTypes {
  activeMainPhotoIndex: number;
  isShowedSlider: boolean;
}
const initialState: sliderStateTypes = {
  activeMainPhotoIndex: 0,
  isShowedSlider: false,
};

export const sliderSlicesStates = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setIsActiveMainPhotoIndex: (state, action) => {
      state.activeMainPhotoIndex = action.payload;
    },
    setIsShowedSlider: (state, action) => {
      state.isShowedSlider = action.payload;
    },
  },
});

export const { setIsActiveMainPhotoIndex, setIsShowedSlider } =
  sliderSlicesStates.actions;

export default sliderSlicesStates.reducer;
