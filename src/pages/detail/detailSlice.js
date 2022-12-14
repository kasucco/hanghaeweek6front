import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { commentsApi } from "../../shared/Instance";

const initialState = {
  posts: {},
  detail: [],
  isLoading: false,
  error: null,
};
//게시글 댓글 불러오기
export const __getOnePost = createAsyncThunk(
  "posts/getOnePost",
  async (payload, thunkAPI) => {
    try {
      const data = await commentsApi.getOnePost(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//댓글 생성
export const __addComment = createAsyncThunk(
  "posts/addComment",
  async (postIdComment, thunkAPI) => {
    try {
      const data = await commentsApi.addComment(postIdComment);
      console.log("addcomment", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//댓글삭제
export const __deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async (payload, thunkAPI) => {
    try {
      await commentsApi.deleteComment(payload);

      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
//댓글 수정하기
export const __updateComment = createAsyncThunk(
  "posts/updateComment",
  async (params, payload, thunkAPI) => {
    try {
      const data = await commentsApi.updateComment(params, payload);

      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    //게시글과 댓글 불러오기
    [__getOnePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getOnePost.fulfilled]: (state, action) => {
      const payloadPost = action.payload.data.findOnePost;
      const payloadContent = action.payload.data.findAllComment;
      console.log("extraReducer", payloadContent);
      state.isLoading = false;
      state.detail = payloadContent;
      state.posts = payloadPost;
    },
    [__getOnePost.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //댓글수정
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const tpayloadet = state.comments.filter(
        (comment) => comment.id === action.payload
      );
      state.comments.splice(tpayloadet, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 댓글 수정
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const commentList = state.comments.map((comment) =>
        comment.id === action.payload.commentId
          ? { ...comment, commentBody: action.payload.input }
          : comment
      );
      state.comments = commentList;
    },
    [__updateComment.pending]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default detailSlice.reducer;
