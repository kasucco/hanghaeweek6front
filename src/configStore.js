// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";

import { getDefaultMiddleware } from "@reduxjs/toolkit";
import posts from "./pages/post/postSlice";
import members from "./pages/members/membersSlice";

const store = configureStore({
  reducer: { posts: posts, members: members },
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
