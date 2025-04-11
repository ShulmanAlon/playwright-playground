import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../../ui/pages/LoginPage';
import { InventoryPage } from '../../ui/pages/InventoryPage';
import { uiFixtures } from '../../ui/fixtures/ui-fixtures';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

const test = base.extend<MyFixtures>({
  ...uiFixtures,
});

export { test, expect };
