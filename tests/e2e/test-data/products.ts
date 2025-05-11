import { Product } from './Product';

export const products = {
  backPack: new Product(
    'sauce-labs-backpack',
    'Sauce Labs Backpack',
    'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    29.99
  ),
  bikeLight: new Product(
    'sauce-labs-bike-light',
    'Sauce Labs Bike Light',
    `A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.`,
    9.99
  ),
};
