import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { checkClaims } from "../firebase/auth/providers";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useAuth = () => {
  const { displayName, email, photoURL, uid, rol, status, errorMessage } =
    useAppSelector((state) => state.auth);

  const checkAuth = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user) => {
        if (!user) return dispatch(logout());

        const { uid, email, displayName, photoURL } = user;
        const rol = await checkClaims(user);

        dispatch(login({ uid, email, displayName, photoURL, rol }));
      });
    }, []);
  };

  return {
    displayName,
    email,
    photoURL,
    uid,
    rol,
    status,
    errorMessage,
    checkAuth,
  };
};
