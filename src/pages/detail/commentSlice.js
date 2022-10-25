import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { commentsApi } from "../../shared/Instance";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "posts/getComments",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("http://52.79.218.57:3000/comments");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "posts/addComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await commentsApi.addComment(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCommentById = createAsyncThunk(
  "posts/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://52.79.218.57:3000/comments/${payload.postId}`
      );

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//삭제
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

export const __updateComment = createAsyncThunk(
  "posts/updateComment",
  async (payload, thunkAPI) => {
    try {
      const data = await commentsApi.updateComment(payload);
      // {commentBody: payload.input,}
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.pending]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, action.payload];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getCommentById.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCommentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getCommentById.pending]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state.comments);
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
      console.log(action.payload);
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

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
