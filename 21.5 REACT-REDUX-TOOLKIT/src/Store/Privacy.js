import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    privacytoggle: (state) => {
      return (state = !state);
    },
  },
});

export const { privacytoggle } = privacySlice.actions;
export default privacySlice.reducer;
