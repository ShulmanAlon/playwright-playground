import { LoginPage } from '../pages/LoginPage';
import { User } from '../test-data/User';

type LoginFlowArgs = {
  loginPage: LoginPage;
  user: User;
};

/**
 * Executes the login phase from the log in page and finishes in inventory
 *
 * Requires browser to be open and in landing page url beforehand
 *
 * @param args - See 'LoginFlowArgs' for full structure.
 */
export async function loginFlow({ loginPage, user }: LoginFlowArgs) {
  await loginPage.verifyLanding();
  await loginPage.fillCredentials(user);
  await loginPage.submit();
}
