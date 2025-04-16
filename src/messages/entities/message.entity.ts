export class messageEntity {
  id: number;
  text: string;
  from: string;
  to: string;
  read: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
