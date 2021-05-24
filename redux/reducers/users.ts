import { RESET_USERS, USERS_RECEIVED } from '../actionTypes';

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

function users(state: User[] = [], action: any): User[] {
  switch (action.type) {
    case USERS_RECEIVED:
      return action.payload;
    case RESET_USERS:
      return [];
    default:
      return state;
  }
};

export default users;
