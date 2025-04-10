import { test } from '../../fixtures/fixtures';
import { loginUsers } from '../../test-data/users';

test.describe('login tests', () => {
  test('Successful login', async ({ loginFlow, inventoryPage }) => {
    await loginFlow(loginUsers.validUser);
    await inventoryPage.verifySignedIn();
  });

  test('Invalid user login', async ({ loginFlow, loginPage }) => {
    await loginFlow(loginUsers.invalidUser);
    await loginPage.verifyInvalidLogin();
  });
});
