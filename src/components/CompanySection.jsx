import { useState } from "react";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const companies = [
  { name: "L'Oréal", products: ["Shampoo", "Conditioner", "Hair Serum"] },
  {
    name: "Estée Lauder",
    products: ["Foundation", "Lipstick", "Skincare Set"],
  },
  { name: "Maybelline", products: ["Mascara", "Eyeliner", "BB Cream"] },
  { name: "MAC Cosmetics", products: ["Lipstick", "Blush", "Concealer"] },
  {
    name: "Sephora",
    products: ["Eyeshadow Palette", "Primer", "Setting Spray"],
  },
  { name: "Dior Beauty", products: ["Perfume", "Lip Gloss", "Face Powder"] },
];

const CompanySection = () => {
  const [showMore, setShowMore] = useState(Array(companies.length).fill(false));

  const toggleShowMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  return (
    <div className="my-12">
      <hr className="w-[90%] m-3 mx-auto text-gray-400 " />
      <div className="flex items-center justify-evenly mx-16 flex-wrap gap-2">
        {companies.map((company, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="md:text-lg text-gray-400 hover:scale-105 hover:text-gray-900 cursor-pointer flex justify-center gap-2 items-center">
              <IoCartOutline className="text-gray-500" />
              {company.name}
              <button
                className="flex items-center text-gray-900 font-semibold"
                onClick={() => toggleShowMore(index)}
              >
                {showMore[index] ? (
                  <MdExpandLess className="ml-1 transition-all duration-300" />
                ) : (
                  <MdExpandMore className="ml-1 transition-all duration-300" />
                )}
              </button>
            </div>

            {/* Dropdown Section with Smooth Transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                showMore[index] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-2 text-sm text-gray-500">
                {company.products.map((product, i) => (
                  <li key={i} className="py-1">
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-[90%] m-3 mx-auto text-gray-400" />
    </div>
  );
};

export default CompanySection;
