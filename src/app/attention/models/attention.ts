export interface Attention {
  attention_id: string;
  create_at: Date;
  served_at?: Date;
  status: number;
  staff_id: string;
  room_id: string;
  user_id: string;
}
