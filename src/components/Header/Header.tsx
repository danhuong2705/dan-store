import React from "react";
import styles from "./Header.module.scss";
import { MENU as menuData } from "../../contants/data/__mocks__";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <div className={`${styles.wrapper} space-between`}>
      <div className={`${styles.leftMenu} space-between`}>
        {menuData.map((item: string, index: number) => (
          <div key={index} className={styles.menuItem}>
            {item}
          </div>
        ))}
      </div>
      <Link href="/">
        <div className={`${styles.middle} center`}>
          <img src="/assets/crown.svg" />
        </div>
      </Link>
      <div className={`${styles.rightMenu} space-between`}>
        <Link href="/account">
          <img src="/assets/user.svg" />
        </Link>

        <img src="/assets/search.svg" />

        <Link href="/cart">
          <img src="/assets/cart.svg" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
