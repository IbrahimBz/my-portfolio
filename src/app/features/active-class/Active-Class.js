import { createSlice } from "@reduxjs/toolkit";
export const activeSlice = createSlice({
  name: "activeSlice",
  initialState: { section: "#" },
  reducers: {
    setActiveClass: (state, action) => {
      state.section = action.payload;
    },
  },
});

export const { setActiveClass } = activeSlice.actions;
export default activeSlice.reducer;
