import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { foundationSlice } from "./fundations/foundationSlice";
import { memberSlice } from "./member/memberSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    foundation: foundationSlice.reducer,
    members: memberSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
