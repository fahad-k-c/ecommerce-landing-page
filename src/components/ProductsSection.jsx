import React from "react";
import ProductCollection from "./ProductCollection";
import Categories from "./Categories";
import Reviews from "./Reviews";

const ProductsSection = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-5 mb-12">
      <div className=" rounded-lg ">
        <Categories />
      </div>
      <div className="min-h-32 rounded-lg lg:col-span-2">
        <ProductCollection />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default ProductsSection;
