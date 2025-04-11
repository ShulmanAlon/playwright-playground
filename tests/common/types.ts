import { LoginPage } from '../ui/pages/LoginPage';
import { InventoryPage } from '../ui/pages/InventoryPage';
import { User } from '../ui/test-data/User';
// import { Page, APIRequestContext } from '@playwright/test';

export type MyFixtures = {
  openBasePage: void;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  loginFlow: (user: User) => Promise<void>;
};
