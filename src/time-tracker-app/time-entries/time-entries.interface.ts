export interface TimeEntryUser {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

export interface TimeEntry {
  user: TimeEntryUser;
  date: Date;
  totalTime: number;
}
