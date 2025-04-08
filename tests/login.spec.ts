import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginUsers } from './test-data/users';
import { MainPage } from '../pages/MainPage';

test.describe('login', () => {
  test.beforeEach(async ({ page }) => {
    // open browser and navigate to starting url
    await page.goto('');
  });

  test('Successful login', async ({ page }) => {
    const validUser = loginUsers.validUser;
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);

    await mainPage.clickOnLoginSignup();
    await loginPage.verifyLanding();
    await loginPage.login(validUser.email, validUser.password);
    await mainPage.verifySignedIn(validUser.fullName);
  });
});
