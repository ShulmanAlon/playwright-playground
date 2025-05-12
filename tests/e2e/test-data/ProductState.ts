import { Product } from './Product';
import { ProductComponent } from '../../components/ProductComponent';

/**
 * Wrapper for the Product and ProductComponent objects (that should not be updated in runtime) and adds additional updatable properties for verification purposes in runtime
 */
export type ProductState = {
  product: Product;
  productComponent: ProductComponent;
  expectedInCart?: boolean;
  updatedPrice?: number;
  expectedQuantity?: number;
};
