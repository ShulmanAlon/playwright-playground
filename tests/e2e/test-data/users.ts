import { User } from './User';

export const loginUsers = {
  validUser: new User('standard_user', 'secret_sauce'),
  fullUser: new User(
    'standard_user',
    'secret_sauce',
    'Tracy',
    'Bubba',
    '12345'
  ),
  invalidUser: new User('standard_user', 'abc123'),
};
