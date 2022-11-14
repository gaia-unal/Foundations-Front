import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  status: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  uid: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: "unauthenticated",
  email: null,
  displayName: null,
  photoURL: null,
  uid: null,
  errorMessage: null,
};
console.log();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.uid = payload.uid;
      state.errorMessage = null;
    },
    logout: (state) => {
      state.status = "unauthenticated";
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.uid = null;
      state.errorMessage = null;
    },
    loginError: (state, { payload }) => {
      state.status = "error";
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.uid = null;
      state.errorMessage = payload;
    },
    checking: (state) => {
      state.status = "checking";
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.uid = null;
      state.errorMessage = null;
    },
  },
});

export const { checking, loginError, login, logout } = authSlice.actions;

export default authSlice.reducer;
