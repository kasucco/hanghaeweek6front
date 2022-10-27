import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { membersApi } from "../../shared/Instance";

const initialState = {
  members: {},
  err: {},
};

//로그인하기
export const AcyncLoginMember = createAsyncThunk(
  "members/loginMember",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await membersApi.loginMember(payload);
      console.log(data);
      localStorage.setItem("token", data.data.data.token);
      // sessionStorage.setItem("token", data.data.data.token);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//계정 생성
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
//계정삭제
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
//계정 정보 수정
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
//members
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
    //로그인
    [AcyncLoginMember.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.members = payload;
      console.log(payload);
    },
    [AcyncLoginMember.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.err = payload;
      console.log(payload);
    },
    //회원가입
    [AcyncCreateMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
    },
    [AcyncCreateMember.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.err = payload;
      console.log(state.err.response.data);
    },
    //회원삭제
    [AcyncDeleteMember.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
    },
    //회원정보 수정
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
