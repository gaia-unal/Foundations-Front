import { member } from "../interface/member.interface";

export const transformMember = (member: member) => {
  const { id, family, level, education, activity, ...basicData } = member;

  const familyWithoutId = family.map(({ id, ...rest }) => rest);

  const educationWithoutId = education.map(({ id, ...rest }) => rest);

  const activityWithoutId = activity.map(({ id, ...rest }) => rest);

  const valuesWithoutIds = {
    ...basicData,
    family: familyWithoutId,
    education: educationWithoutId,
    activity: activityWithoutId,
  };

  return valuesWithoutIds;
};
