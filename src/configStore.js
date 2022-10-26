// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import posts from "./pages/post/postSlice";
import members from "./pages/members/membersSlice";
import detail from "./pages/detail/detailSlice";

const store = configureStore({
  reducer: { posts: posts, members: members, detail: detail },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
