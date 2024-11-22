import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    authorized: true,
    userName: null
  },
  reducers: {
    authUser(state, action) {
      state.authorized = action.payload;
    },
  },
});

export const { authUser } = profileSlice.actions;

export default profileSlice.reducer;
