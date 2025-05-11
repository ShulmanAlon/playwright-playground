import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../e2e/pages/LoginPage';
import { InventoryPage } from '../../e2e/pages/InventoryPage';
import { uiFixtures } from '../../e2e/fixtures/ui-fixtures';
import { CartPage } from '../../e2e/pages/CartPage';
import { CheckoutStepOnePage } from '../../e2e/pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../../e2e/pages/CheckoutStepTwoPage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
};

const test = base.extend<MyFixtures>({
  ...uiFixtures,
});

export { test, expect };
