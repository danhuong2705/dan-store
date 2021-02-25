import Link from "next/link";
import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  sku: number;
  name: string;
  price: number;
  images: Array<string>;
}
const Card: React.FC<CardProps> = ({
  sku,
  name,
  price,
  images,
}: CardProps) => {
  return (
    <Link href={`/product/${sku}`}>
      <div className={styles.wrapper}>
        <img src={images[0]} alt="product-image" />
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(price)}
        </div>
      </div>
    </Link>
  );
};

export default Card;
