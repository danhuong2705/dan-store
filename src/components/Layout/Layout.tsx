import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="center flex-column">
      <div className="page-width">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
