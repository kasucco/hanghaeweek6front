// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
import posts from "./pages/post/postSlice";

const store = configureStore({
  reducer: { posts: posts },
  // devTools: process.env.NODE_ENV === "development",
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
console.log(posts)

export default store;
