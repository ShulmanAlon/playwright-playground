import { test } from '../../common/fixtures/fixtures';
import { loginFlow } from '../helpers/loginFlow';
import { loginUsers } from '../test-data/users';
import { products } from '../test-data/products';
import { ProductComponent } from '../../components/ProductComponent';
import {
  buyMultipleProductsFlow,
  buyProductFlow,
} from '../helpers/buyProductFlow';
import { Purchase } from '../test-data/Purchase';
import { ProductState } from '../test-data/ProductState';

test.describe('product purchase process', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Full single product purchase flow process', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
  }) => {
    const productState: ProductState = {
      product: products.backPack,
      productComponent: ProductComponent.fromTitle(
        page,
        products.backPack.title
      ),
    };
    const user = loginUsers.fullUser;
    const purchase = new Purchase();

    await loginFlow({ loginPage, user });
    await buyProductFlow({
      inventoryPage,
      cartPage,
      checkoutStepOnePage,
      checkoutStepTwoPage,
      productState,
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
    const productsStates: ProductState[] = [
      {
        product: products.backPack,
        productComponent: ProductComponent.fromTitle(
          page,
          products.backPack.title
        ),
      },
      {
        product: products.bikeLight,
        productComponent: ProductComponent.fromTitle(
          page,
          products.bikeLight.title
        ),
      },
    ];
    const user = loginUsers.fullUser;
    const purchase = new Purchase();

    await loginFlow({ loginPage, user });
    await buyMultipleProductsFlow({
      inventoryPage,
      cartPage,
      checkoutStepOnePage,
      checkoutStepTwoPage,
      productsStates,
      user,
      purchase,
    });
  });
});
