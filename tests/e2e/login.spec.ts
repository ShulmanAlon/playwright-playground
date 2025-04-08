import { test } from '../fixtures/fixtures';
import { loginUsers } from '../test-data/users';

test.describe('login', () => {
  test('Successful login', async ({ loginFlow, openMain }) => {
    // deep fixture usage
    await openMain();
    await loginFlow(loginUsers.validUser);
  });

  test('Invalid user login', async ({ mainPage, loginPage, openMain }) => {
    // minimal fixture usage
    await openMain();
    await test.step('Navigate to log in page', async () => {
      await mainPage.clickOnLoginSignup();
    });
    await test.step('Fill user with wrong password and try logging in', async () => {
      await loginPage.login(loginUsers.invalidUser);
    });
    await test.step('Verify error message in UI', async () => {
      await loginPage.verifyInvalidLogin();
    });
  });
});
