import React, { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import productImage from "../assets/skincare-removebg-preview.png";

const ProductCollection = () => {
  const [favorites, setFavorites] = useState({});
  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section>
      <div className="mx-auto max-w-screen-xl">
        <ul className="grid gap-1 grid-cols-2 md:grid-cols-3">
          <li>
            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] h-[250px] relative">
              <img
                alt=""
                src={productImage}
                className="h-35 w-full object-fit rounded-lg border-2 border-white"
              />
              <div
                className="absolute top-2 right-2 bg-white rounded-full text-lg p-1 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => toggleFavorite(0)}
              >
                {favorites[0] ? (
                  <MdFavorite className="text-red-500" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </div>

              <div className="bg-white p-1 px-3">
                <p className="mt-1 line-clamp-3 font-bold text-xl/relaxed text-gray-900 ">
                  Face Serum
                </p>
                <p className="text-xs text-gray-500 font-md">
                  Deep moisture boost
                </p>
                <div className="flex mt-3 justify-between items-center">
                  <p className="text-lg font-semibold">$29</p>
                  <button className="text-xs text-white cursor-pointer hover:font-semibold hover:text-gray-900 hover:bg-white transition-all duration-300 border border-gray-900 py-1 px-3 rounded-full bg-gray-900 active:translate-y-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] h-[250px] relative">
              <img
                alt=""
                src={productImage}
                className="h-35 w-full object-fit rounded-lg border-2 border-white"
              />
              <div
                className="absolute top-2 right-2 bg-white rounded-full text-lg p-1 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => toggleFavorite(1)}
              >
                {favorites[1] ? (
                  <MdFavorite className="text-red-500" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </div>

              <div className="bg-white p-1 px-3">
                <p className="mt-1 line-clamp-3 font-bold text-xl/relaxed text-gray-900 ">
                  Body Wash
                </p>
                <p className="text-xs text-gray-500 font-md">
                  Brightens and cleanses
                </p>
                <div className="flex mt-3 justify-between items-center">
                  <p className="text-lg font-semibold">$19</p>
                  <button className="text-xs text-white cursor-pointer hover:font-semibold hover:text-gray-900 hover:bg-white transition-all duration-300 border border-gray-900 py-1 px-3 rounded-full bg-gray-900 active:translate-y-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] h-[250px] relative">
              <img
                alt=""
                src={productImage}
                className="h-35 w-full object-fit rounded-lg border-2 border-white"
              />
              <div
                className="absolute top-2 right-2 bg-white rounded-full text-lg p-1 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => toggleFavorite(2)}
              >
                {favorites[2] ? (
                  <MdFavorite className="text-red-500" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </div>

              <div className="bg-white p-1 px-3">
                <p className="mt-1 line-clamp-3 font-bold text-xl/relaxed text-gray-900 ">
                  Face Cream
                </p>
                <p className="text-xs text-gray-500 font-md">
                  Reduces fine lines
                </p>
                <div className="flex mt-3 justify-between items-center">
                  <p className="text-lg font-semibold">$45</p>
                  <button className="text-xs text-white cursor-pointer hover:font-semibold hover:text-gray-900 hover:bg-white transition-all duration-300 border border-gray-900 py-1 px-3 rounded-full bg-gray-900 active:translate-y-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] h-[250px] relative">
              <img
                alt=""
                src={productImage}
                className="h-35 w-full object-fit rounded-lg border-2 border-white"
              />
              <div
                className="absolute top-2 right-2 bg-white rounded-full text-lg p-1 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => toggleFavorite(3)}
              >
                {favorites[3] ? (
                  <MdFavorite className="text-red-500" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </div>

              <div className="bg-white p-1 px-3">
                <p className="mt-1 line-clamp-3 font-bold text-xl/relaxed text-gray-900 ">
                  Charcoal Gel
                </p>
                <p className="text-xs text-gray-500 font-md">
                  Calms irritated skin
                </p>
                <div className="flex mt-3 justify-between items-center">
                  <p className="text-lg font-semibold">$15</p>
                  <button className="text-xs text-white cursor-pointer hover:font-semibold hover:text-gray-900 hover:bg-white transition-all duration-300 border border-gray-900 py-1 px-3 rounded-full bg-gray-900 active:translate-y-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] h-[250px] relative">
              <img
                alt=""
                src={productImage}
                className="h-35 w-full object-fit rounded-lg border-2 border-white"
              />
              <div
                className="absolute top-2 right-2 bg-white rounded-full text-lg p-1 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => toggleFavorite(4)}
              >
                {favorites[4] ? (
                  <MdFavorite className="text-red-500" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </div>

              <div className="bg-white p-1 px-3">
                <p className="mt-1 line-clamp-3 font-bold text-xl/relaxed text-gray-900 ">
                  Shampoo
                </p>
                <p className="text-xs text-gray-500 font-md">For strong Hair</p>
                <div className="flex mt-3 justify-between items-center">
                  <p className="text-lg font-semibold">$25</p>
                  <button className="text-xs text-white cursor-pointer hover:font-semibold hover:text-gray-900 hover:bg-white transition-all duration-300 border border-gray-900 py-1 px-3 rounded-full bg-gray-900 active:translate-y-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] h-[250px] relative">
              <img
                alt=""
                src={productImage}
                className="h-35 w-full object-fit rounded-lg border-2 border-white"
              />
              <div
                className="absolute top-2 right-2 bg-white rounded-full text-lg p-1 cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => toggleFavorite(5)}
              >
                {favorites[5] ? (
                  <MdFavorite className="text-red-500" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </div>

              <div className="bg-white p-1 px-3">
                <p className="mt-1 line-clamp-3 font-bold text-xl/relaxed text-gray-900 ">
                  Sunscreen
                </p>
                <p className="text-xs text-gray-500 font-md">
                  UV ray protection{" "}
                </p>
                <div className="flex mt-3 justify-between items-center">
                  <p className="text-lg font-semibold">$25</p>
                  <button className="text-xs text-white cursor-pointer hover:font-semibold hover:text-gray-900 hover:bg-white transition-all duration-300 border border-gray-900 py-1 px-3 rounded-full bg-gray-900 active:translate-y-1">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductCollection;
