import { test, expect } from '../../common/fixtures/fixtures';
import { loginFlow } from '../helpers/loginFlow';
import { loginUsers } from '../test-data/users';
import { products } from '../test-data/products';
import { ProductComponent } from '../../components/ProductComponent';
import { buyProductFlow } from '../helpers/buyProductFlow';

test.describe('product purchase process', () => {
  test('Full product purchase flow process', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
  }) => {
    const product = products.backPack;
    const productComponent = ProductComponent.fromTitle(page, product.title);
    const user = loginUsers.fullUser;
    await loginFlow({ page, loginPage, user });
    await buyProductFlow({
      inventoryPage,
      cartPage,
      checkoutStepOnePage,
      productComponent,
      product,
      user,
    });
  });
});
