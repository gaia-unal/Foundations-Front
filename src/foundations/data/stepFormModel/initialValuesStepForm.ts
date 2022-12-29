import { ActivityInformation } from "./../../interface/activityInformation.interface";
import { Activity } from "../../interface/activityInformation.interface";
import { BasicInformationMember } from "../../interface/basicInformationMember.interface";
import {
  Education,
  EducationInformation,
} from "../../interface/educationInformation.interface";
import {
  Family,
  FamilyInformation,
} from "../../interface/familyInformation.interface";
import { fieldsBasicInformation } from "./../inputFieldMember";

const initialValuesBasicInformation: BasicInformationMember =
  fieldsBasicInformation.reduce((acc: any, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

export const initialValuesFieldsEducation: Education = {
  level: "",
  institution: "",
  title: "",
  startDate: "",
  endDate: "",
};

const initialValuesEducationInformation: EducationInformation = {
  education: [initialValuesFieldsEducation],
};

export const initialValuesFieldsFamily: Family = {
  relation: "",
  name: "",
  lastName: "",
  identification: "",
  birthDate: "",
};
const initialValuesFamilyInformation: FamilyInformation = {
  family: [initialValuesFieldsFamily],
};

export const initialValuesFieldsActivity: Activity = {
  type: "",
  description: "",
  experience: 0,
};
const initialValuesActivityInformation: ActivityInformation = {
  activity: [initialValuesFieldsActivity],
};

export const initialValuesStepForm = {
  ...initialValuesBasicInformation,
  ...initialValuesEducationInformation,
  ...initialValuesFamilyInformation,
  ...initialValuesActivityInformation,
};
