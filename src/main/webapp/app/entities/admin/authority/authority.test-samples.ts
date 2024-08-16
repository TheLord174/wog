import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '3f315f6c-c4bc-49aa-a4fb-feede152f2a9',
};

export const sampleWithPartialData: IAuthority = {
  name: '2ffb49ca-5b01-41f9-9351-cbb79cb2d88a',
};

export const sampleWithFullData: IAuthority = {
  name: 'cf9983f6-7087-4ec3-b394-1a837c322b4a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
