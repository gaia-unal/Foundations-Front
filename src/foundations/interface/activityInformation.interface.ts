export interface Activity {
  id?: string;
  type: string;
  description: string;
  experience: number;
}

export interface ActivityInformation {
  activity: Activity[];
}
