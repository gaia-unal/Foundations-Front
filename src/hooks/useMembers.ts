import { useCallback } from "react";
import { BasicInformationMember } from "../foundations/interface/basicInformationMember.interface";
import { member } from "../foundations/interface/member.interface";
import { addMember } from "../store/member/memberSlice";
import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useMembers = () => {
  const dispatch = useAppDispatch();
  const { members, activeMember, loadingMembers } = useAppSelector(
    (state: RootState) => state.members
  );

  const startAddMember = useCallback(
    (member: BasicInformationMember) => dispatch(addMember(member)),
    [dispatch]
  );

  return {
    members,
    activeMember,
    loadingMembers,
    startAddMember,
  };
};
