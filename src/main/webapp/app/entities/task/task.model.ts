import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';

export interface ITask {
  id: number;
  title?: string | null;
  description?: string | null;
  identity?: number | null;
  duedate?: dayjs.Dayjs | null;
  completed?: boolean | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
