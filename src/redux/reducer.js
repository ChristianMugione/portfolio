import { createSlice } from "@reduxjs/toolkit";
import { closeMenuIfMobile } from "./auxFncs";

const initialState = {
  menuOpened: true,
};

export const menuSlice = createSlice({
  name: "menuReducer",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menuOpened = true;
    },
    closeMenu: (state) => {
      state.menuOpened = closeMenuIfMobile();
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
// export const { menuSlice } = menuReducer.reducer;
