import { Locator, Page, expect } from '@playwright/test';

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
    await expect(this.page).toHaveURL('login'); // move to static
    await expect(
      this.page.getByRole('heading', { name: 'Login to your account' })
    ).toBeVisible();
    await expect(
      this.page.getByRole('heading', { name: 'New User Signup!' })
    ).toBeVisible();
  }

  async login(userName: string, password: string) {
    await this.signupEmailInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
