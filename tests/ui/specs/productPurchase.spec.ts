import { test } from '../../common/fixtures/fixtures';
import { loginFlow } from '../helpers/loginFlow';
import { loginUsers } from '../test-data/users';
import { products } from '../test-data/products';
import { ProductComponent } from '../../components/ProductComponent';
import { buyProductFlow } from '../helpers/buyProductFlow';
import { Purchase } from '../test-data/Purchase';

test.describe('product purchase process', () => {
  test('Full product purchase flow process', async ({
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
});
