import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
}

export const __getPosts = createAsyncThunk(
    'posts/getPosts',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const data = await axios.get('http://localhost:3001/posts');
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [__getPosts.pending]: (state) => {
            state.isLoading = true;
        },
        [__getPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload
        },
        [__getPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const { } = PostsSlice.actions;
export default PostsSlice.reducer;
