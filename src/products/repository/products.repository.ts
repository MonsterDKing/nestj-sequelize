import { Product } from "../entities/product.entity";

export const productsProvider = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useValue: Product,
  },
];