import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from './test-data/users';
import { MainPage } from '../pages/MainPage';

test.describe('login', () => {
  test.beforeEach(async ({ page }) => {
    // open browser and navigate to starting url
    await page.goto('');
  });

  test('Successful login', async ({ page }) => {
    const validUser = users.valid_user;
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);

    await mainPage.clickOnLoginSignup();
    loginPage.verifyLanding();
    await loginPage.login(validUser.email, validUser.password);
    mainPage.verifySignedIn(); // not working
  });
});
