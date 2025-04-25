import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { Product } from '../test-data/Product';
import { ProductComponent } from '../../components/ProductComponent';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { User } from '../test-data/User';
import { Purchase } from '../test-data/Purchase';

type BuyProductArgs = {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  productComponent: ProductComponent;
  product: Product;
  user: User;
  purchase: Purchase;
};

export async function buyProductFlow({
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  checkoutStepTwoPage,
  productComponent,
  product,
  user,
  purchase,
}: BuyProductArgs) {
  await inventoryPage.verifyProduct(productComponent, product);
  await inventoryPage.addProductToCart(productComponent, product, purchase);
  await inventoryPage.verifyProduct(productComponent, product);
  await inventoryPage.openCart();
  await cartPage.verifyProduct(productComponent, product);
  await cartPage.openCheckout();
  await checkoutStepOnePage.fillCheckoutForm(user);
  await checkoutStepOnePage.openContinue();
  await checkoutStepTwoPage.verifyPurchaseDetails(purchase);
  await checkoutStepTwoPage.openFinish();
  await checkoutStepTwoPage.verifyOrderDone();
}
