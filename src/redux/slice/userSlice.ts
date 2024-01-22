import { User } from "@/model/dto";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
import { loading } from "./loadingSlice";
import { registerApi } from "@/api/user";

export const register = createAsyncThunk(
  "posts/register",
  async ({ username, password }: { username: string; password: string }, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await registerApi({ username, password });
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
interface Initial {
  isAuthen: User | null;
}
const initialState: Initial = { isAuthen: null };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.isAuthen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      store.dispatch(loading(true));
    });
    builder.addCase(register.fulfilled, (state, action) => {
      store.dispatch(loading(false));
      state.isAuthen = action.payload.user;
    });
    builder.addCase(register.rejected, (state, action) => {
      store.dispatch(loading(false));
    });
  },
});

const userReducer = userSlice.reducer;
const { updateUser } = userSlice.actions;
export { updateUser };
export default userReducer;
