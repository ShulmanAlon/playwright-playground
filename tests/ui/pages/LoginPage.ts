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

  @step()
  async fillCredentials(user: User) {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
  }

  @step()
  async submit() {
    await this.loginButton.click();
  }

  @step()
  async login(user: User) {
    await this.fillCredentials(user);
    await this.submit();
  }

  @step()
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

  @step()
  async verifyInvalidLogin() {
    await expect(this.page.locator('form')).toMatchAriaSnapshot(`
      - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
        - button
      `);
  }
}
