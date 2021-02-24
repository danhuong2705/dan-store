import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="center">
      <div className="page-width">
        <Header />
        {children}
      </div>
    </div>
  );
};
export default Layout;
