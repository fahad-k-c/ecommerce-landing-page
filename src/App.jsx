import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React from "react";
import CompanySection from "./components/CompanySection";
import ProductsSection from "./components/ProductsSection";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanySection />
      <ProductsSection/>
    </>
  );
}

export default App;
