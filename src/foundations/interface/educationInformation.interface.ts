export interface Education {
  id?: string;
  level: string;
  institution: string;
  title: string;
  startDate: string;
  endDate: string;
  completed: boolean;
}

export interface EducationInformation {
  education: Education[];
}
