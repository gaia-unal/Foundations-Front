import { createSlice } from "@reduxjs/toolkit";
import { foundation } from "../../foundations/interface/foundation";

interface foundationState {
  foundations: foundation[];
  activeFoundation: foundation | undefined;
  foundationLoading: boolean;
}

const initialState: foundationState = {
  foundations: [],
  activeFoundation: undefined,
  foundationLoading: false,
};

export const foundationSlice = createSlice({
  name: "foundations",
  initialState,
  reducers: {
    getFoundations: (state, action) => {
      state.foundations = action.payload;
      state.foundationLoading = false;
    },
    getActiveFoundation: (state, { payload }) => {
      state.activeFoundation = state.foundations.find(
        (foundation) => foundation.id === payload
      );
      state.foundationLoading = false;
    },
    setFoundationLoading: (state) => {
      state.foundationLoading = true;
    },
  },
});

export const { getActiveFoundation, getFoundations, setFoundationLoading } =
  foundationSlice.actions;
