import { loginApi } from "@/api/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
import { updateUser } from "./userSlice";

export const login = createAsyncThunk(
  "posts/login",
  async ({ username, password }: { username: string; password: string }, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await loginApi({ username, password });
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { loginState: false, userInfo: {}, online: false, onlineFriends: {}, onlineFriendsArr: [] },
  reducers: {
    logout: (state, action) => {
      store.dispatch(updateUser(null));
    },
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
const {} = authSlice.actions;
export {};
