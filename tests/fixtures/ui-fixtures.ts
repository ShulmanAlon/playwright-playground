import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { User } from '../test-data/User';
import { Page } from '@playwright/test';

export const uiFixtures = {
  openBasePage: async ({ page }: { page: Page }, use: () => Promise<void>) => {
    // await step('open browser and navigate to starting url', async () => {
    await page.goto('/');
    // });
    await use();
  },
  loginPage: async (
    { page }: { page: Page },
    use: (loginPage: LoginPage) => Promise<void>
  ) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  inventoryPage: async (
    { page }: { page: Page },
    use: (inventoryPage: InventoryPage) => Promise<void>
  ) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  loginFlow: async (
    {
      loginPage,
      openBasePage,
    }: {
      loginPage: LoginPage;
      openBasePage: void;
    },
    use: (fn: (user: User) => Promise<void>) => Promise<void>
  ) => {
    await use(async (user: User) => {
      void openBasePage;
      await loginPage.verifyLanding();
      await loginPage.login(user);
    });
  },
};

export { expect } from '@playwright/test';
