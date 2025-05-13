import test, { Locator, Page, expect } from '@playwright/test';
import { step } from '../../common/decorators/step';
import { Purchase } from '../test-data/Purchase';
import { ProductState } from '../test-data/ProductState';

export class InventoryPage {
  readonly page: Page;
  readonly burgerMenuButton: Locator;
  readonly logoutMenuButton: Locator;
  readonly closeMenuButton: Locator;
  readonly openCartButton: Locator;

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
    this.openCartButton = this.page.locator('[data-test="shopping-cart-link"]');
  }

  @step('verify the landing page using ARIA snapshots')
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

  @step(
    'verify the user is signed in by opening the side menu and confirming the "logout" button to be visible'
  )
  async verifySignedIn() {
    await this.burgerMenuButton.click();
    await expect(this.logoutMenuButton).toBeVisible();
  }

  @step(
    `add specified product - to cart by clicking. updates purchase object and productState expectedInCart property`
  )
  async addProductToCart(productState: ProductState, purchase: Purchase) {
    await test.step(`Add product - ${productState.product.title}`, async () => {
      await productState.productComponent.toggleCartButton();
      productState.expectedInCart = true;
      purchase.addProduct(productState);
    });
  }

  @step(
    'verify the specified product matches the client product by its properties, including checking if it is in cart or not'
  )
  async verifyProduct(productState: ProductState) {
    await test.step(`verify product - ${productState.product.title}`, async () => {
      await productState.productComponent.assertMatchesProduct(productState);
    });
  }

  @step('click on the open cart button to open the cart page')
  async openCart() {
    await this.openCartButton.click();
  }
}
