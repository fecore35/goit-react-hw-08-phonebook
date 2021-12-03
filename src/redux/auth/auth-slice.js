import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "redux/auth";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoader: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.pending](state, action) {
      state.isLoader = true;
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoader = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoader = false;
      state.error = action.payload;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
