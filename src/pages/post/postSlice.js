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
//게시글 불러오기
export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await postsApi.getPosts(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//게시글 생성하기
export const acyncCreatePosts = createAsyncThunk(
  "posts/createPosts",
  async (inputs, thunkAPI) => {
    try {
      const data = await postsApi.creatPost(inputs);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//게시글 수정하기
export const acyncUpdatePosts = createAsyncThunk(
  "posts/updatePosts",
  async (params, payload, thunkAPI) => {
    try {
      const data = await postsApi.updatetPost(params, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//게시글 삭제하기
export const acyncDeletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (payload, thunkAPI) => {
    try {
      const data = await postsApi.deletePost(payload);
      console.log(data);

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
    //게시글 불러오기
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.findAllPost = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //게시글 생성하기
    [acyncCreatePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [acyncCreatePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //게시글 수정하기
    [acyncUpdatePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [acyncUpdatePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //게시글 삭제하기
    [acyncDeletePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.findAllPost = action.payload;
    },
    [acyncDeletePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = PostsSlice.actions;
export default PostsSlice.reducer;
