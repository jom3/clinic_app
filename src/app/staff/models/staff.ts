export interface Staff {
  staff_id:    string;
  started_at:  Date;
  updated_at:  Date;
  finished_at?: Date;
  status:      string;
  user:        string;
  department:  string;
  speciality:  string;
}
