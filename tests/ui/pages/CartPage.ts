import { Locator, Page } from 'playwright/test';
import { step } from '../../common/decorators/step';
import { ProductComponent } from '../../components/ProductComponent';
import { Product } from '../test-data/Product';

export class CartPage {
  readonly checkoutButton: Locator;

  constructor(public page: Page) {
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  @step()
  async verifyProduct(productComponent: ProductComponent, product: Product) {
    await productComponent.assertMatchesProduct(product);
  }

  @step()
  async openCheckout() {
    await this.checkoutButton.click();
  }
}
