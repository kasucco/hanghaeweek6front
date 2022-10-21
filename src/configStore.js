// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import book from "./pages/members/membersSlice";

const store = configureStore({
  reducer: { book: book },
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
