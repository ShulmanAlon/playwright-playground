import { Locator, Page } from '@playwright/test';
import { User } from '../test-data/User';
import { step } from '../../common/decorators/step';

export class CheckoutStepOnePage {
  readonly continueButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipPostalInput: Locator;

  constructor(public page: Page) {
    this.continueButton = this.page.locator('[data-test="continue"]');
    this.firstNameInput = this.page.locator('[data-test="firstName"]');
    this.lastNameInput = this.page.locator('[data-test="lastName"]');
    this.zipPostalInput = this.page.locator('[data-test="postalCode"]');
  }

  @step("fill the user's details in the checkout page form")
  async fillCheckoutForm(user: User) {
    if (!user.firstname || !user.lastname || !user.zipPostal) {
      throw new Error('Missing required user information for checkout.');
    }
    await this.firstNameInput.fill(user.firstname);
    await this.lastNameInput.fill(user.lastname);
    await this.zipPostalInput.fill(user.zipPostal);
  }

  @step('click on the continue page to navigate to checkout step 2 page')
  async openContinue() {
    await this.continueButton.click();
  }
}
