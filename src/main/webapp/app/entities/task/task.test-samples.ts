import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 28144,
};

export const sampleWithPartialData: ITask = {
  id: 28276,
  completed: false,
};

export const sampleWithFullData: ITask = {
  id: 15601,
  title: 'blah revolve',
  description: 'which psst',
  identity: 9337,
  duedate: dayjs('2024-08-15'),
  completed: false,
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
