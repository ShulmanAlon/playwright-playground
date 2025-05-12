import { test } from '../../common/fixtures/fixtures';
import { loginFlow } from '../helpers/loginFlow';
import { loginUsers } from '../test-data/users';

test.describe('login tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Successful login with valid user', async ({
    page,
    loginPage,
    inventoryPage,
  }) => {
    await loginFlow({ loginPage, user: loginUsers.validUser });
    await inventoryPage.verifySignedIn();
  });

  test('Invalid user login with wrong password', async ({
    page,
    loginPage,
  }) => {
    await loginFlow({ loginPage, user: loginUsers.invalidUser });
    await loginPage.verifyInvalidLogin();
  });
});
