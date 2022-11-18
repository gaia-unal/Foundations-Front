import {
  createUserEmailAndPassword,
  loginWithEmailAndPassword,
  singInWithGoogle,
} from "../../firebase/auth/providers";
import { AppDispatch } from "../store";
import { checking, login, loginError, logout } from "./authSlice";

export const startLoginWithEmailPassword = (
  email: string,
  password: string
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checking());
    const res = await loginWithEmailAndPassword(email, password);
    if (!res.error) {
      return dispatch(login({ ...res }));
    }
    dispatch(loginError(res.message));
  };
};

export const startLoginWhitGoogle = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checking());
    const res = await singInWithGoogle();
    if (!res.error) {
      return dispatch(login({ ...res }));
    }
    dispatch(loginError(res.message));
  };
};

export const startLogout = () => {
  return (dispatch: AppDispatch) => {
    dispatch(logout());
  };
};

export const startRegisterUser = (
  email: string,
  password: string,
  displayName: string
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checking());
    const res = await createUserEmailAndPassword(email, password, displayName);
    if (!res.error) {
      return dispatch(login({ ...res }));
    }
    dispatch(loginError(res.message));
  };
};
