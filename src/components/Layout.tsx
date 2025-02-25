import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // ✅ Ensures Navbar is used in all pages

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* ✅ This renders the current page content */}
      </main>
    </>
  );
};

export default Layout;
