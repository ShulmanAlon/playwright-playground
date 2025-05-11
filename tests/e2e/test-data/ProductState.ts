import { Product } from './Product';
import { ProductComponent } from '../../components/ProductComponent';

export type ProductState = {
  product: Product;
  productComponent: ProductComponent;
  expectedInCart?: boolean;
  updatedPrice?: number;
  expectedQuantity?: number;
};
