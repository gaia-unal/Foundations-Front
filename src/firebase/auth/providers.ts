import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "../config";

export const singInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(FirebaseAuth, provider);
    const { displayName, email, photoURL, uid } = user;

    return {
      error: false,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error: any) {
    console.log(error);

    return {
      error: true,
      message: error.message,
    };
  }
};
export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { displayName, photoURL, uid } = user;
    return {
      error: false,
      photoURL,
      email,
      displayName,
      uid,
    };
  } catch (error: any) {
    return {
      error: true,
      message: error.message,
    };
  }
};

export const createUserEmailAndPassword = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const user = FirebaseAuth.currentUser;
    if (user) {
      await updateProfile(user, { displayName });
    }
    return {
      error: false,
      uid: user?.uid,
      photoURL: user?.photoURL,
      email,
      displayName,
    };
  } catch (error: any) {
    return {
      error: true,
      message: error.message,
    };
  }
};
