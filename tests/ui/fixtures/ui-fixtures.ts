import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';

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
  cartPage: async (
    { page }: { page: Page },
    use: (cartPage: CartPage) => Promise<void>
  ) => {
    await use(new CartPage(page));
  },
  checkoutStepOnePage: async (
    { page }: { page: Page },
    use: (checkoutStepOnePage: CheckoutStepOnePage) => Promise<void>
  ) => {
    await use(new CheckoutStepOnePage(page));
  },
};
