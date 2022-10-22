import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { membersApi } from "../../shared/Instance";

const initialState = {
  members: {
    signup: [
      {
        id: "signup",
        nickname: "signup",
        password: "signup",
        confirm: "signup",
      },
    ],
    login: [
      {
        id: "",
        nickname: "",
        password: "",
        confirm: "",
      },
    ],
  },
};

const url = process.env.REACT_APP_URL1;

export const AcyncPostMember = createAsyncThunk(
  "members/postMember",
  async (payload, thunkAPI) => {
    try {
      const data = await membersApi.postMember(payload);
      console.log("getDate", data.data);
      return thunkAPI.fulfillWithValue(data.data);
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
      await axios.delete(url + `/${payload}`);
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
      const data = await axios.patch(url + `/${payload.id}`, payload);
      console.log("수정하기", data, payload);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    addmember: (state, action) => {
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
    [AcyncPostMember.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.member = action.payload;
    },
    [AcyncCreateMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;

      state.members.signup.push(payload);
      console.log("paylaod", payload);
    },
    [AcyncDeleteMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.reviews = state.reviews.filter((item) => {
        return item.id !== payload;
      });
    },
    [AcyncUpdateMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.reviews.forEach((element) => {
        if (element.id === payload.id) {
          element.title = payload.title;
          element.content = payload.content;
        } else return element;
      });
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReview, deleteReview, selectReview } = membersSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default membersSlice.reducer;
