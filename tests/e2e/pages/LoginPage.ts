import { Locator, Page, expect } from '@playwright/test';
import { User } from '../test-data/User';
import { step } from '../../common/decorators/step';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.locator('[data-test="username"]');
    this.passwordInput = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
  }

  @step("fills specified user user's username and password in form")
  async fillCredentials(user: User) {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
  }

  @step('submits the log-in form')
  async submit() {
    await this.loginButton.click();
  }

  @step('fills the user credentials and clicks submit to log-in')
  async login(user: User) {
    await this.fillCredentials(user);
    await this.submit();
  }

  @step('verify the landing page using ARIA snapshots')
  async verifyLanding() {
    await expect(this.page.locator('#root')).toMatchAriaSnapshot(
      `- text: Swag Labs`
    );
    await expect(this.page.locator('#login_button_container'))
      .toMatchAriaSnapshot(`
      - textbox "Username"
      - textbox "Password"
      - button "Login"
      `);
  }

  @step(
    'verify that if user had invalid login attempt the client displays correct message using the ARIA snapshot'
  )
  async verifyInvalidLogin() {
    await expect(this.page.locator('form')).toMatchAriaSnapshot(`
      - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
        - button
      `);
  }
}
