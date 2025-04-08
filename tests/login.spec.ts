import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginUsers } from './test-data/users';
import { MainPage } from '../pages/MainPage';

test.describe('login', () => {
  test.beforeEach(async ({ page }) => {
    await test.step('open browser and navigate to starting url', async () => {
      await page.goto('');
    });
  });

  test('Successful login', async ({ page }) => {
    const validUser = loginUsers.validUser;
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);

    await test.step('Verify landing in main page, click on login and verify landing in login page', async () => {
      await mainPage.verifyLanding();
      await mainPage.clickOnLoginSignup();
      await loginPage.verifyLanding();
    });

    await test.step('Fill valid user data and click to sign in', async () => {
      await loginPage.login(validUser.email, validUser.password);
    });

    await test.step('Verify landing in main page and that user is signed in', async () => {
      await mainPage.verifySignedIn(validUser.fullName);
    });
  });
});
