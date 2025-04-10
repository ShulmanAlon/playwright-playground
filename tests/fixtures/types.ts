import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { User } from '../test-data/User';
// import { Page, APIRequestContext } from '@playwright/test';

export type MyFixtures = {
  openBasePage: void;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  loginFlow: (user: User) => Promise<void>;
};
