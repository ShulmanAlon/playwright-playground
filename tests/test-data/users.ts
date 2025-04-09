import { User } from './User';

export const loginUsers = {
  validUser: new User('standard_user', 'secret_sauce'),
  invalidUser: new User('standard_user', 'abc123'),
};
