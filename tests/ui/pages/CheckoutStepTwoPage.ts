import { expect, Locator, Page } from '@playwright/test';
import { step } from '../../common/decorators/step';
import { Purchase } from '../test-data/Purchase';

export class CheckoutStepTwoPage {
  readonly subTotal: Locator;
  readonly purchaseTax: Locator;
  readonly totalSum: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;

  constructor(public page: Page) {
    this.subTotal = this.page.locator('[data-test="subtotal-label"]');
    this.purchaseTax = this.page.locator('[data-test="tax-label"]');
    this.totalSum = this.page.locator('[data-test="total-label"]');
    this.finishButton = this.page.locator('[data-test="finish"]');
    this.cancelButton = this.page.locator('[data-test="cancel"]');
  }

  @step()
  async openFinish() {
    await this.finishButton.click();
  }

  @step()
  async cancel() {
    await this.cancelButton.click();
  }

  @step()
  async verifyPurchaseDetails(purchase: Purchase) {
    expect(this.subTotal).toHaveText('Item total: $' + purchase.subtotal);
    expect(this.purchaseTax).toHaveText('Tax: $' + purchase.tax.toFixed(2));
    expect(this.totalSum).toHaveText('Total: $' + purchase.total.toFixed(2));
  }

  @step()
  async verifyOrderDone() {
    await expect(this.page.locator('[data-test="checkout-complete-container"]'))
      .toMatchAriaSnapshot(`
    - img "Pony Express"
    - heading "Thank you for your order!" [level=2]
    - text: Your order has been dispatched, and will arrive just as fast as the pony can get there!
    - button "Back Home"
    `);
  }
}
