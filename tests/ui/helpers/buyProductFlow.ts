import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { Product } from '../test-data/Product';
import { ProductComponent } from '../../components/ProductComponent';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { User } from '../test-data/User';

type BuyProductArgs = {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  productComponent: ProductComponent;
  product: Product;
  user: User;
};

export async function buyProductFlow({
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  productComponent,
  product,
  user,
}: BuyProductArgs) {
  await inventoryPage.verifyProduct(productComponent, product);
  await inventoryPage.addProductToCart(productComponent, product);
  await inventoryPage.verifyProduct(productComponent, product);
  await inventoryPage.openCart();
  await cartPage.verifyProduct(productComponent, product);
  await cartPage.openCheckout();
  await checkoutStepOnePage.fillCheckoutForm(user);
  await checkoutStepOnePage.continueButton.click();
  // TODO: add final page validation, math verification for purchase etc..
}
