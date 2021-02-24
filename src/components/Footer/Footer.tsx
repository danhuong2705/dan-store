import React from "react";
import { MENU } from "../../contants/data/__mocks__";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <div className={`${styles.wrapper} center flex-column`}>
      <div className={styles.content}>
        <img src="/assets/logo-footer.png" />
        <div className={`space-between ${styles.column}`}>
          {MENU.map((item: string) => (
            <div className={styles.category}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
