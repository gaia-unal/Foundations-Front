import { ActivityInformation } from "./activityInformation.interface";
import { BasicInformationMember } from "./basicInformationMember.interface";
import { EducationInformation } from "./educationInformation.interface";
import { FamilyInformation } from "./familyInformation.interface";

export interface member
  extends BasicInformationMember,
    EducationInformation,
    FamilyInformation,
    ActivityInformation {}
