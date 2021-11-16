// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartProductProduct, CartProduct } = initSchema(schema);

export {
  Product,
  CartProductProduct,
  CartProduct
};