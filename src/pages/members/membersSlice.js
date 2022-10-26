import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { membersApi } from "../../shared/Instance";

const initialState = {
  members: {},
};

const url = process.env.REACT_APP_URL1;

export const AcyncLoginMember = createAsyncThunk(
  "members/loginMember",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await membersApi.loginMember(payload);
      console.log(data);
      sessionStorage.setItem("token", data.data.data.token);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AcyncCreateMember = createAsyncThunk(
  "members/createMember",
  async (payload, thunkAPI) => {
    try {
      console.log("create", payload);
      const data = await membersApi.creatMember(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AcyncDeleteMember = createAsyncThunk(
  "members/deleteMember",
  async (payload, thunkAPI) => {
    try {
      await membersApi.deleteMember();
      sessionStorage.removeItem("token");
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AcyncUpdateMember = createAsyncThunk(
  "members/updateMember",
  async (payload, thunkAPI) => {
    try {
      console.log("update", payload);
      const data = await membersApi.updateMember(payload);
      console.log("수정하기", data, payload);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AcyncGetMember = createAsyncThunk(
  "members/getMember",
  async (payload, thunkAPI) => {
    try {
      const data = await membersApi.getMember();
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    readMember: (state, action) => {
      return {
        ...state,
        members: [action.payload, ...state.members],
      };
    },
    deleteReview: (state, action) => {
      return state.reviews.filter((item) => item.id !== action.payload);
    },

    selectReview: (state, action) => {
      return {
        ...state,
        review: state.reviews.find((item) => {
          if (item.id == Number(action.payload)) {
            return item;
          }
        }),
      };
    },
  },
  extraReducers: {
    [AcyncLoginMember.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.members = payload;
      console.log(payload);
    },
    [AcyncCreateMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
    },
    [AcyncDeleteMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
    },
    [AcyncUpdateMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
    },
    [AcyncGetMember.fulfilled]: (state) => {
      state.isLoading = true;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReview, deleteReview, selectReview } = membersSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default membersSlice.reducer;
