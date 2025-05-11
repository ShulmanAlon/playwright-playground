import { Locator, Page } from 'playwright/test';
import { step } from '../../common/decorators/step';
import { ProductState } from '../test-data/ProductState';

export class CartPage {
  readonly checkoutButton: Locator;

  constructor(public page: Page) {
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  @step()
  async verifyProduct(productState: ProductState) {
    await productState.productComponent.assertMatchesProduct(productState);
  }

  @step()
  async openCheckout() {
    await this.checkoutButton.click();
  }
}
