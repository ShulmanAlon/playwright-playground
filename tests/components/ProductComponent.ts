import { Locator, Page, expect } from '@playwright/test';
import { Product } from '../ui/test-data/Product';

export class ProductComponent {
  readonly locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async assertMatchesProduct(product: Product) {
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

    expect(name).toBe(product.title);
    expect(description).toBe(product.description);
    expect(price).toBe(product.price);
  }

  static fromTitle(
    scope: Page | Locator,
    productTitle: string
  ): ProductComponent {
    const rootLocator = scope
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
