export interface Family {
  id?: string;
  relation: string;
  name: string;
  lastName: string;
  identification: string;
  birthDate: string;
}

export interface FamilyInformation {
  family: Family[];
}
