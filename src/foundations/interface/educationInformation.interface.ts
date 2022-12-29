export interface Education {
  level: string;
  institution: string;
  title: string;
  startDate: string;
  endDate: string;
}

export interface EducationInformation {
  education: Education[];
}
