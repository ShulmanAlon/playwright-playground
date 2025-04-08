import { Locator, Page, expect } from '@playwright/test';
import { User } from '../test-data/User';

export class LoginPage {
  readonly page: Page;
  readonly signupEmailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupEmailInput = this.page
      .locator('form')
      .filter({ hasText: 'Login' })
      .getByPlaceholder('Email Address');
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
  }

  async verifyLanding() {
    await expect(this.page).toHaveURL('login'); // TODO: move to static
    await expect(
      this.page.getByRole('heading', { name: 'Login to your account' })
    ).toBeVisible();
    await expect(
      this.page.getByRole('heading', { name: 'New User Signup!' })
    ).toBeVisible();
  }

  async login(user: User) {
    await this.signupEmailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }
}
