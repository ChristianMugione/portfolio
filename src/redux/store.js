import { configureStore } from "@reduxjs/toolkit";
import { appStatusSlice, menuSlice } from "./reducer";

export default configureStore({
  reducer: {
    menuReducer: menuSlice.reducer,
    appStatusReducer: appStatusSlice.reducer,
  },
});
