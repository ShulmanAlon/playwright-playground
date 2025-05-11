import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { User } from '../test-data/User';

type LoginFlowArgs = {
  page: Page;
  loginPage: LoginPage;
  user: User;
};

export async function loginFlow({ page, loginPage, user }: LoginFlowArgs) {
  await loginPage.verifyLanding();
  await loginPage.fillCredentials(user);
  await loginPage.submit();
}
