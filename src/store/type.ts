import type { Action } from 'redux';

export type userState = {
  address: string;
};

export type SetAddressAction = Action<'setAddress'> & {
  address: string;
};
