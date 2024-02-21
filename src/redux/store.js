import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./reducer";

export default configureStore({
  reducer: {
    menuReducer: menuSlice.reducer,
  },
});
