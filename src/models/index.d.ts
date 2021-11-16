import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartProductProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly image?: string;
  readonly images?: string[];
  readonly options?: string[];
  readonly avgRating?: number;
  readonly ratings?: number;
  readonly price: number;
  readonly oldPrice?: number;
  readonly cartproducts?: (CartProductProduct | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class CartProductProduct {
  readonly id: string;
  readonly cartproduct: CartProduct;
  readonly product: Product;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CartProductProduct, CartProductProductMetaData>);
  static copyOf(source: CartProductProduct, mutator: (draft: MutableModel<CartProductProduct, CartProductProductMetaData>) => MutableModel<CartProductProduct, CartProductProductMetaData> | void): CartProductProduct;
}

export declare class CartProduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string;
  readonly productID: string;
  readonly product?: (CartProductProduct | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CartProduct, CartProductMetaData>);
  static copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct, CartProductMetaData>) => MutableModel<CartProduct, CartProductMetaData> | void): CartProduct;
}