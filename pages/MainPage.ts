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

  verifySignedIn() {
    // TODO - not working, will work if manually wait in debug
    expect(this.page.getByRole('link', { name: ' Logout' })).toBeVisible();
    expect(
      this.page.getByRole('link', { name: ' Delete Account' })
    ).toBeVisible();
  }
}
