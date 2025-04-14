import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../../ui/pages/LoginPage';
import { InventoryPage } from '../../ui/pages/InventoryPage';
import { uiFixtures } from '../../ui/fixtures/ui-fixtures';
import { CartPage } from '../../ui/pages/CartPage';
import { CheckoutStepOnePage } from '../../ui/pages/CheckoutStepOnePage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
};

const test = base.extend<MyFixtures>({
  ...uiFixtures,
});

export { test, expect };
