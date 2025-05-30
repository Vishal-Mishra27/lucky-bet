import React from "react";
import Navbar from "../MyComponents13/casinoComponents/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


export default function CasinoLayout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Renders nested route content here */}
      <Footer />
    </div>
  );
}
