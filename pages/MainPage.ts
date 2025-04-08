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

  async verifyLanding() {
    // using ARIA snapshot

    await expect(this.page.locator('#header')).toMatchAriaSnapshot(`
    - link "Website for automation practice":
      - img "Website for automation practice"
    - list:
      - listitem:
        - link " Home"
      - listitem:
        - link " Products"
      - listitem:
        - link " Cart"
      - listitem:
        - link " Signup / Login"
      - listitem:
        - link " Test Cases"
      - listitem:
        - link " API Testing"
      - listitem:
        - link " Video Tutorials"
      - listitem:
        - link " Contact us"
    `);
  }

  async verifySignedIn(userName: string) {
    await expect(
      this.page.getByRole('link', { name: ' Logout' })
    ).toBeVisible();
    await expect(
      this.page.getByRole('link', { name: ' Delete Account' })
    ).toBeVisible();
    await expect(
      this.page
        .getByRole('listitem')
        .filter({ hasText: `Logged in as ${userName}` })
    ).toBeVisible();
  }
}
