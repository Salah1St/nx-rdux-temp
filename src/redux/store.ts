import { configureStore } from "@reduxjs/toolkit";
import dayjsMiddleware from "./middlewares/dayjs";
import loadingReducer from "./slice/loadingSlice";
import authReducer from "./slice/authSlice";
import languageReducer from "./slice/languageSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    language: languageReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(dayjsMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
