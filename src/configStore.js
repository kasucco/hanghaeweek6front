// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import lists from "./pages/post/postSlice";
import members from "./pages/members/membersSlice";

const store = configureStore({
  reducer: { lists: lists, members: members },
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
