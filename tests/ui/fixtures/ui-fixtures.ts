import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

export const uiFixtures = {
  loginPage: async (
    { page }: { page: Page },
    use: (loginPage: LoginPage) => Promise<void>
  ) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async (
    { page }: { page: Page },
    use: (inventoryPage: InventoryPage) => Promise<void>
  ) => {
    await use(new InventoryPage(page));
  },
};
