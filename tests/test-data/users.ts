import { User } from './User';

export const loginUsers = {
  validUser: new User('test_user_159753@test.com', 'abc123', 'Test', 'User'),
  invalidUser: new User('test_user_159753@test.com', 'abC123', 'Test', 'User'),
};

export const signUpUsers = {
  // completeProfileUser: new User() // TODO: add optional properties to class
};
