import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { User } from '../test-data/User';

type MyFixtures = {
  mainPage: MainPage;
  loginPage: LoginPage;
  loginFlow: (user: User) => Promise<void>;
};

export const test = baseTest.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  loginFlow: async ({ mainPage, loginPage }, use) => {
    await use(async (user: User) => {
      await test.step('Verify landing in main page, click on login', async () => {
        await mainPage.verifyLanding();
        await mainPage.clickOnLoginSignup();
      });
      await test.step('Verify landing in login page, fill valid user data and click to sign in', async () => {
        await loginPage.verifyLanding();
        await loginPage.login(user);
      });
      await test.step('Verify landing in main page and that user is signed in', async () => {
        await mainPage.verifySignedIn(user);
      });
    });
  },
});

export { expect } from '@playwright/test';
