import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { foundationApi } from "./fundations/foundation.api";
import { foundationSlice } from "./fundations/foundationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    foundation: foundationSlice.reducer,
    foundationApi: foundationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foundationApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
