import { member } from "./../../foundations/interface/member.interface";
import { createSlice } from "@reduxjs/toolkit";
import { BasicInformationMember } from "../../foundations/interface/basicInformationMember.interface";

interface MemberSlice {
  members: BasicInformationMember[];
  activeMember: BasicInformationMember | null;
  loadingMembers: boolean;
}

const initialState: MemberSlice = {
  members: [],
  activeMember: null,
  loadingMembers: false,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMembers(state, action) {
      state.members = action.payload;
    },
    setActiveMember(state, action) {
      state.activeMember = action.payload;
    },
    addMember(state, action) {
      state.members.push(action.payload);
    },
  },
});

export const { addMember, setActiveMember, setMembers } = memberSlice.actions;
