import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { membersApi } from "../../shared/Instance";

const initialState = {
  members: [
    {
      id: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
    },
  ],
  member: {
    id: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  },
};

const url = process.env.REACT_APP_URL1;

export const AcyncGetMember = createAsyncThunk(
  "members/getMember",
  async (payload, thunkAPI) => {
    try {
      const data = await membersApi.getMember();
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
    [AcyncGetMember.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.review = action.payload;
      console.log(action.payload);
    },
    [AcyncCreateMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.members.push(payload);
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
