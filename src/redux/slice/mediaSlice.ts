import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media",
  initialState: { isDesktop: false, isTablet: false, isMobile: false },
  reducers: {
    setDesktop: (state, action) => {
      state.isDesktop = true;
      state.isTablet = false;
      state.isMobile = false;
    },
    setTablet: (state, action) => {
      state.isDesktop = false;
      state.isTablet = true;
      state.isMobile = false;
    },
    setMobile: (state, action) => {
      state.isDesktop = false;
      state.isTablet = false;
      state.isMobile = true;
    },
  },
});

export default mediaSlice.reducer;
const { setDesktop, setTablet, setMobile } = mediaSlice.actions;
export { setDesktop, setTablet, setMobile };
