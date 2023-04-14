import { BasicInformationMember } from "./basicInformationMember.interface";

export interface foundation {
  id?: string;
  identification?: string;
  name?: string;
  address?: string;
  adminEmail?: string;
  phone?: string;
  email?: string;
  logo?: string;
  description?: string;
  created_at?: string;
  members?: BasicInformationMember[];
}
