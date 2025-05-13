import test, { Locator, Page } from 'playwright/test';
import { step } from '../../common/decorators/step';
import { ProductState } from '../test-data/ProductState';

export class CartPage {
  readonly checkoutButton: Locator;

  constructor(public page: Page) {
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  @step(
    'verify the specified product matches the client product by its properties, including checking if it is in cart or not'
  )
  async verifyProduct(productState: ProductState) {
    await test.step(`verify product - ${productState.product.title}`, async () => {
      await productState.productComponent.assertMatchesProduct(productState);
    });
  }

  @step('click on the checkout button to navigate to checkout page')
  async openCheckout() {
    await this.checkoutButton.click();
  }
}
