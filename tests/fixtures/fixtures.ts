import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { User } from '../test-data/User';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  loginFlow: (user: User) => Promise<void>;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  loginFlow: async ({ loginPage, inventoryPage }, use) => {
    await use(async (user: User) => {
      await loginPage.verifyLanding();
      await loginPage.login(user);
    });
  },
});

export { expect } from '@playwright/test';
