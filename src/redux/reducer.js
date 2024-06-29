import { createSlice } from "@reduxjs/toolkit";
import { closeMenuIfMobile } from "./auxFncs";

export const menuSlice = createSlice({
  name: "menuReducer",
  initialState: {
    menuOpened: true,
  },
  reducers: {
    openMenu: (state) => {
      state.menuOpened = true;
    },
    closeMenu: (state) => {
      state.menuOpened = closeMenuIfMobile();
    },
  },
});

export const appStatusSlice = createSlice({
  name: "appStatus",
  initialState: {
    messageOpened: false,
    messageText: "",
    messageTime: 0,
  },
  reducers: {
    openMessage: (state, action) => {
      state.messageOpened = true;
      state.messageText = action.payload.text;
      state.messageTime = action.payload.time;
    },
    closeMessage: (state) => {
      state.messageOpened = false;
    },
    toggleMessage: (state) => {
      state.messageOpened = !state.messageOpened;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export const { openMessage, closeMessage, toggleMessage } =
  appStatusSlice.actions;

// export const { menuSlice } = menuReducer.reducer;
