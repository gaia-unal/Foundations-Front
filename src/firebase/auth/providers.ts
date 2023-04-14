import {
  createUserWithEmailAndPassword,
  getIdToken,
  getIdTokenResult,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User,
} from "firebase/auth";
import jwtDecode from "jwt-decode";
import { FirebaseAuth } from "../config";

export const checkClaims = async (user: User) => {
  const token = await getIdToken(user, true);
  localStorage.setItem("token", token);
  const decodeToken: any = await jwtDecode(token);
  let rol = "";
  if (decodeToken.rol) {
    rol = decodeToken.rol;
  } else {
    rol = "user";
  }
  return rol;
};

export const singInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(FirebaseAuth, provider);
    const rol = await checkClaims(user);

    const { displayName, email, photoURL, uid } = user;

    return {
      error: false,
      displayName,
      email,
      photoURL,
      uid,
      rol,
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

    // const uidprueba = ;
    const { displayName, photoURL, uid } = user;

    const rol = await checkClaims(user);

    return {
      error: false,
      photoURL,
      email,
      displayName,
      uid,
      rol,
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
      const { token } = await getIdTokenResult(user);
      localStorage.setItem("token", token);
    }

    return {
      error: false,
      uid: user?.uid,
      photoURL: user?.photoURL,
      email,
      displayName,
      rol: "user",
    };
  } catch (error: any) {
    return {
      error: true,
      message: error.message,
    };
  }
};

export const recoverPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(FirebaseAuth, email);
  } catch (error: any) {
    console.log(error);
  }
};

export const signOutFirebase = async () => {
  localStorage.clear();
  localStorage.removeItem("token");
  return await FirebaseAuth.signOut();
};
