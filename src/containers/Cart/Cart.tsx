import React from "react";
import Card from "../../components/Card";
import { PRODUCTS } from "../../contants/data/__mocks__";
import { IProduct } from "../../types";

const Cart = () => {
  return (
    <div className={`space-between flex-wrap`}>
      {PRODUCTS.map((product: IProduct) => (
        <Card key={product.sku} {...product} />
      ))}
    </div>
  );
};
export default Cart;
