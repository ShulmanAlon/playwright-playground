import { Locator, Page, expect } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly loginSignupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginSignupButton = this.page.getByRole('link', {
      name: ' Signup / Login',
    });
  }

  async clickOnLoginSignup() {
    await this.loginSignupButton.click();
  }

  async verifySignedIn() {
    // TODO - not working, will work if manually wait in debug
    await expect(
      this.page.getByRole('link', { name: ' Logout' })
    ).toBeVisible();
    await expect(
      this.page.getByRole('link', { name: ' Delete Account' })
    ).toBeVisible();
    await expect(
      this.page
        .getByRole('listitem')
        .filter({ hasText: 'Logged in as test user' })
    ).toBeVisible();
  }
}
