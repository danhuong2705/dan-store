import React from "react";
import { useRouter } from "next/router";
import { PRODUCTS } from "../../contants/data/__mocks__";
import { IProduct } from "../../types";
const ProductDetail: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <div>{router.query.sku}</div>
      <div>
        {
          PRODUCTS.find((product: IProduct) => product.sku == +router.query.sku)
            .name
        }
      </div>
    </div>
  );
};
export default ProductDetail;
