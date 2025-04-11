import { Locator, Page, expect } from '@playwright/test';
import { step } from '../../common/decorators/step';

export class InventoryPage {
  readonly page: Page;
  readonly burgerMenuButton: Locator;
  readonly logoutMenuButton: Locator;
  readonly closeMenuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.burgerMenuButton = this.page.getByRole('button', {
      name: 'Open Menu',
    });
    this.logoutMenuButton = this.page.locator(
      '[data-test="logout-sidebar-link"]'
    );
    this.closeMenuButton = this.page.getByRole('button', {
      name: 'Close Menu',
    });
  }

  @step()
  async verifyLanding() {
    // using ARIA snapshot
    await expect(
      this.page.locator('[data-test="primary-header"]')
    ).toMatchAriaSnapshot(`- text: Swag Labs`);
    await expect(this.page.locator('[data-test="secondary-header"]'))
      .toMatchAriaSnapshot(`
    - text: Products Name (A to Z)
    - combobox:
      - option "Name (A to Z)" [selected]
      - option "Name (Z to A)"
      - option "Price (low to high)"
      - option "Price (high to low)"
    `);
  }

  @step()
  async verifySignedIn() {
    await this.burgerMenuButton.click();
    await expect(this.logoutMenuButton).toBeVisible();
  }
}
