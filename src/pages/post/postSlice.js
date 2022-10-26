import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsApi } from "../../shared/Instance";

const initialState = {
  findAllPost: {
    postId: 1,
    name: "에러",
    nickname: "alstjq1826",
    title: "제목 입니다",
  },

  isLoading: false,
  error: null,
  post: {},
};

export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      console.log("getposts", payload);
      const data = await postsApi.getPosts(payload);
      console.log(data.data.findAllPost);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const acyncCreatePosts = createAsyncThunk(
  "posts/createPosts",
  async (inputs, thunkAPI) => {
    console.log(inputs);
    try {
      const data = await postsApi.creatPost(inputs);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const acyncUpdatePosts = createAsyncThunk(
  "posts/updatePosts",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await postsApi.updatetPost(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("actionpayload", action.payload);
      state.findAllPost = action.payload;
      console.log("actionpayload", action.payload);
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [acyncCreatePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      console.log(state.posts);
    },
    [acyncUpdatePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      console.log(state.posts);
    },
  },
});

export const {} = PostsSlice.actions;
export default PostsSlice.reducer;
