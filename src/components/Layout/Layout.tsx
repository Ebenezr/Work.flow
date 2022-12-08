import React from "react";
import Aside from "../Nav/Aside";

interface LayoutProps {
  children?: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex h-[100vh] w-screen  bg-gray-100">
      <Aside />
      <section className="w-full ">{children}</section>
    </main>
  );
};

export default Layout;
