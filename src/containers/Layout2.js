import React from "react";
import Content from "../components/Content2";
const Layout = ({ children }) => {
  return (
    <div className="Layout2">
      <Content>{children}</Content>
    </div>
  );
};
export default Layout;