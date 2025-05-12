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

  @step(
    'click on the finish button to finish the purchase and view the final message'
  )
  async openFinish() {
    await this.finishButton.click();
  }

  @step('press on cancel button') // TODO add functionality explanation if used
  async cancel() {
    await this.cancelButton.click();
  }

  @step(
    'verify the purchase detail match the calculated purchase object, icluding subtotal, tax and total sum'
  )
  async verifyPurchaseDetails(purchase: Purchase) {
    expect(this.subTotal).toHaveText('Item total: $' + purchase.subtotal);
    expect(this.purchaseTax).toHaveText('Tax: $' + purchase.tax.toFixed(2));
    expect(this.totalSum).toHaveText('Total: $' + purchase.total.toFixed(2));
  }

  @step(
    'verify order has been successfully finished, checking by ARIA snapshot'
  )
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
