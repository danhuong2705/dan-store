export interface IProduct {
  sku: number;
  name: string;
  price: number;
  availableStock: number;
  description: string;
  images: Array<string>;
}
