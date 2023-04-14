type level = {
  id: string;
  level: number;
  date: string;
  active: string;
};

export interface BasicInformationMember {
  id?: string;
  name: string;
  lastName: string;
  identification: string;
  address: string;
  phone: string;
  email: string;
  birthDate: string;
  level?: string | level[];
}
