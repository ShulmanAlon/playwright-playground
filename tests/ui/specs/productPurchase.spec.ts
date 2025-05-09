import { test } from '../../common/fixtures/fixtures';
import { loginFlow } from '../helpers/loginFlow';
import { loginUsers } from '../test-data/users';
import { products } from '../test-data/products';
import { ProductComponent } from '../../components/ProductComponent';
import { buyMultProductsFlow, buyProductFlow } from '../helpers/buyProductFlow';
import { Purchase } from '../test-data/Purchase';
import { Product } from '../test-data/Product';

test.describe('product purchase process', () => {
  test('Full single product purchase flow process', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
  }) => {
    const product = products.backPack;
    const productComponent = ProductComponent.fromTitle(page, product.title);
    const user = loginUsers.fullUser;
    const purchase = new Purchase();

    await loginFlow({ page, loginPage, user });
    await buyProductFlow({
      inventoryPage,
      cartPage,
      checkoutStepOnePage,
      checkoutStepTwoPage,
      productComponent,
      product,
      user,
      purchase,
    });
  });

  test('Full 2 products purchase flow process', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
  }) => {
    const productPairs: [Product, ProductComponent][] = [
      [
        products.backPack,
        ProductComponent.fromTitle(page, products.backPack.title),
      ],
      [
        products.bikeLight,
        ProductComponent.fromTitle(page, products.bikeLight.title),
      ],
    ];
    const user = loginUsers.fullUser;
    const purchase = new Purchase();

    await loginFlow({ page, loginPage, user });
    await buyMultProductsFlow({
      inventoryPage,
      cartPage,
      checkoutStepOnePage,
      checkoutStepTwoPage,
      productPairs,
      user,
      purchase,
    });
  });
});
