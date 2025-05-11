import { Locator, Page, expect } from '@playwright/test';
import { ProductState } from '../e2e/test-data/ProductState';

export class ProductComponent {
  readonly locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async assertMatchesProduct(productState: ProductState) {
    const name = await this.locator
      .locator('[data-test="inventory-item-name"]')
      .innerText();
    const description = await this.locator
      .locator('[data-test="inventory-item-desc"]')
      .innerText();
    const priceText = await this.locator
      .locator('[data-test="inventory-item-price"]')
      .innerText();
    const price = parseFloat(priceText.replace('$', ''));
    const isInCart = await this.isInCart();

    expect(name).toBe(productState.product.title);
    expect(description).toBe(productState.product.description);
    expect(price).toBe(productState.product.price);
    expect(isInCart).toBe(productState.expectedInCart ?? false);
  }

  static fromTitle(
    scope: Page | Locator,
    productTitle: string
  ): ProductComponent {
    const rootLocator = scope // limitation of site used, no data-test or other better solution
      .locator('[data-test="inventory-item-name"]', { hasText: productTitle })
      .locator('..') // item label
      .locator('..') // inventory_item_description
      .locator('..'); // inventory_item

    return new ProductComponent(rootLocator);
  }

  async toggleCartButton() {
    const button = this.locator.locator('button').first();
    await button.click();
  }

  private async getCartButtonLabel(): Promise<string> {
    const button = this.locator.locator('button').first();
    return await button.innerText();
  }

  async isInCart(): Promise<boolean> {
    const text = await this.getCartButtonLabel();
    return text.toLowerCase().includes('remove');
  }
}
