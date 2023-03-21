export interface IChats {
  id: string,
  is_new: boolean,
  message: string,
  created_at: number,
  user?: user
};

interface user {
  id: string,
  avatar: string,
  name: string,
  surname: string,
  you: boolean
};