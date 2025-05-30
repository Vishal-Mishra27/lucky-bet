import React from "react";
import Header2 from "../MyComponent/Header2";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


export default function LiveLayout() {
  return (
    <div>
      <Header2 />
      <Outlet /> {/* Renders nested route content here */}
      <Footer />
    </div>
  );
}
