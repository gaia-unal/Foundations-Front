export interface Activity {
  type: string;
  description: string;
  experience: number;
}

export interface ActivityInformation {
  activity: Activity[];
}
