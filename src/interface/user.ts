export interface IUser {
  id: string;
  title: string,
  avatar: string;
  created_at: number,
  last_message?: last_message
};

interface last_message {
  user_id: string,
  user_name: string,
  user_surname: string,
  message: string,
  created_at: number,
  you: boolean
};