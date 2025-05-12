import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { User } from '../test-data/User';
import { Purchase } from '../test-data/Purchase';
import { ProductState } from '../test-data/ProductState';

type BuyProductArgs = {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  productState: ProductState;
  user: User;
  purchase: Purchase;
};

/**
 * Executes the full purchase flow for a single product from inventory to order completion.
 *
 * This includes verifying inventory, adding to cart, checkout, and order confirmation.
 *
 * @param args - See `BuyProductArgs` for full structure.
 */
export async function buyProductFlow({
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  checkoutStepTwoPage,
  productState,
  user,
  purchase,
}: BuyProductArgs) {
  await inventoryPage.verifyProduct(productState);
  await inventoryPage.addProductToCart(productState, purchase);
  await inventoryPage.verifyProduct(productState);
  await inventoryPage.openCart();
  await cartPage.verifyProduct(productState);
  await cartPage.openCheckout();
  await checkoutStepOnePage.fillCheckoutForm(user);
  await checkoutStepOnePage.openContinue();
  await checkoutStepTwoPage.verifyPurchaseDetails(purchase);
  await checkoutStepTwoPage.openFinish();
  await checkoutStepTwoPage.verifyOrderDone();
}

// TODO can merge to one function that allows single or multiple products
type BuyMultipleProductsArgs = {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  productsStates: ProductState[];
  user: User;
  purchase: Purchase;
};

/**
 * Executes the full purchase flow for multiple products from inventory to order completion.
 *
 * This includes verifying inventory, adding to cart, checkout, and order confirmation.
 *
 * @param args - See `BuyMultipleProductsArgs` for full structure.
 */
export async function buyMultipleProductsFlow({
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  checkoutStepTwoPage,
  productsStates,
  user,
  purchase,
}: BuyMultipleProductsArgs) {
  for (const productState of productsStates) {
    await inventoryPage.verifyProduct(productState);
    await inventoryPage.addProductToCart(productState, purchase);
    await inventoryPage.verifyProduct(productState);
  }
  await inventoryPage.openCart();
  for (const productState of productsStates) {
    await cartPage.verifyProduct(productState);
  }
  await cartPage.openCheckout();
  await checkoutStepOnePage.fillCheckoutForm(user);
  await checkoutStepOnePage.openContinue();
  await checkoutStepTwoPage.verifyPurchaseDetails(purchase);
  await checkoutStepTwoPage.openFinish();
  await checkoutStepTwoPage.verifyOrderDone();
}
