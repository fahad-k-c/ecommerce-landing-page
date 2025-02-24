import React from "react";
import { FaPumpSoap, FaBroom, FaTshirt, FaSprayCan } from "react-icons/fa";
import {
  GiHealthNormal,
  GiFirstAidKit,
  GiMedicinePills,
  GiBodyHeight,
} from "react-icons/gi";
import { MdOutlineMedicalServices, MdCleaningServices } from "react-icons/md"; // Fixed here

const Categories = () => {
  return (
    <>
      <div className="flex lg:flex-col justify-center">
        {/* Cleaning Essentials */}
        <div className="m-5">
          <h2 className="text-2xl font-bold text-right lg:text-left">
            Cleaning Essentials
          </h2>
          <ul className="text-right lg:text-left sm:text">
            <li className="my-2 flex flex-row-reverse lg:flex-row  items-center gap-2">
              <FaPumpSoap className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Disinfectants
              </a>
            </li>
            <li className="my-2 flex flex-row-reverse lg:flex-row items-center gap-2">
              <FaBroom className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Sanitizers
              </a>
            </li>
            <li className="my-2 flex flex-row-reverse lg:flex-row  items-center gap-2">
              <FaTshirt className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Detergents
              </a>
            </li>
            <li className="my-2 flex flex-row-reverse lg:flex-row  items-center gap-2">
              <FaSprayCan className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Air Fresheners
              </a>
            </li>
            <li className="my-2 flex flex-row-reverse lg:flex-row  items-center gap-2">
              <MdCleaningServices className="text-gray-700" />{" "}
              {/* Fixed here */}
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Floor Cleaners
              </a>
            </li>
          </ul>
        </div>

        {/* Healthcare Products */}
        <div className="m-5">
          <h2 className="text-2xl font-bold">Healthcare Products</h2>
          <ul>
            <li className="my-2 flex items-center gap-2">
              <GiHealthNormal className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Personal Hygiene
              </a>
            </li>
            <li className="my-2 flex items-center gap-2">
              <GiFirstAidKit className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                First Aid
              </a>
            </li>
            <li className="my-2 flex items-center gap-2">
              <GiMedicinePills className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Suppliments
              </a>
            </li>
            <li className="my-2 flex items-center gap-2">
              <GiBodyHeight className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Skincare
              </a>
            </li>
            <li className="my-2 flex items-center gap-2">
              <MdOutlineMedicalServices className="text-gray-700" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Pain Relief
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Shop Now Button */}
      <div className="flex justify-center lg:justify-start lg:ml-4">
        <a
          className="rounded-full bg-black px-8 py-3 text-sm font-medium active:translate-y-1 text-white transition hover:scale-105 transition-all duration-300 hover:shadow-xl"
          href="#"
        >
          Shop Now
        </a>
      </div>
    </>
  );
};

export default Categories;
