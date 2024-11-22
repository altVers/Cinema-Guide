import { createSlice } from "@reduxjs/toolkit";

const authFormSlice = createSlice({
  name: "authForm",
  initialState: {
    isShown: false,
    isRegistration: false,
    isRegistrationSuccess: false,
  },
  reducers: {
    showAuthForm(state) {
      state.isShown = !state.isShown;
    },
    changeAuthState(state) {
      state.isRegistration = !state.isRegistration;
    },
    setRegistrationSuccess(state) {
      state.isRegistrationSuccess = true;
    },
  },
});

export default authFormSlice.reducer;
export const { showAuthForm, changeAuthState, setRegistrationSuccess } =
  authFormSlice.actions;
