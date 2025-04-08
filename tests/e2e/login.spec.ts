import { test } from '../fixtures/fixtures';
import { loginUsers } from '../test-data/users';

test.describe('login', () => {
  test.beforeEach(async ({ page }) => {
    await test.step('open browser and navigate to starting url', async () => {
      await page.goto('');
    });
  });

  test('Successful login', async ({ loginFlow }) => {
    // deep fixture usage
    await loginFlow(loginUsers.validUser);
  });

  test('Invalid user login', async ({ mainPage, loginPage }) => {
    // minimal fixture usage
    const invalidUser = loginUsers.invalidUser;
    await test.step('Navigate to log in page', async () => {
      await mainPage.clickOnLoginSignup();
    });
    await test.step('Fill user with wrong password and try logging in', async () => {
      await loginPage.login(invalidUser);
    });
    await test.step('Verify error message in UI', async () => {
      await loginPage.verifyInvalidLogin();
    });
  });
});
