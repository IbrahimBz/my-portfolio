import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./features/active-class/Active-Class";

export const store = configureStore({
  reducer: {
    activeClass: activeReducer,
  },
});
