import React from "react";
import Aside from "../Nav/Aside";

interface LayoutProps {
  children?: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="grid h-[100vh] w-screen grid-cols-5 bg-gray-100">
      <Aside />
      <section className=" col-start-2 col-end-6">{children}</section>
    </main>
  );
};

export default Layout;
