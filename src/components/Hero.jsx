import React, { useState } from "react";
import { MdOutlineExplore } from "react-icons/md";
import HeroImage from "../assets/sunscreen-removebg-preview (1).png";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Hero = () => {
  const [favorites, setFavorites] = useState({});
  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-8 mx-5">
      <div className=" rounded-lg bg-gray-100 lg:col-span-2 p-6 relative flex flex-col items-left gap-4 justify-center">
        <h3
          className="text-4xl md:text-5xl font-bold
        md:font-semibold text-gray-900 z-[50]"
        >
          Health care & <br />
          Cleaning products
        </h3>
        <p className="z-[50] max-w-xs lg:max-w-md mt-5 md:mt-8 text-gray-700 text-xs md:text-sm">
          Discover a range of high-quality healthcare and cleaning products
          designed to keep you and your surroundings safe. From skincare to
          sanitization, we have everything you need for a healthier lifestyle.
        </p>
        <div className="md:mt-8 mt-5 z-[50]">
          {/* Base */}

          <a
            className="inline-block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:ring-3 focus:outline-hidden duration-300"
            href="#"
          >
            Buy Now
          </a>

          {/* Border */}

          <a
            className="inline-block px-4 py-3 text-sm font-medium text-black transition hover:scale-105 ml-4 underline duration-300 "
            href="#"
          >
            <div className="flex items-center justify-center gap-1">
              <MdOutlineExplore />
              Know more
            </div>
          </a>
        </div>
        <div className="absolute top-0 max-sm:bottom-0 right-0 bg-amber-100 sm:right-10 md:right-20 lg:right-15 md:top-0 lg:top-10 sm:bg-amber-200 rounded-tl-full rounded-tr-full rounded-bl-2xl rounded-br-2xl">
          <img
            src={HeroImage}
            className="opacity-50 sm:opacity-100 size-74 md:size-88 z-[20]"
            alt=""
          />
        </div>
        <div className="absolute right-8 bottom-15 hidden sm:block bg-white px-2 py-3 rounded-xl shadow-xl border-1 border-gray-100 hover:scale-105 transition-all duration-300  ">
          <div className="flex items-center justify-center gap-2">
            <div>
              <p className="text-xs font-semibold text-gray-900">
                Add to Wishlist
              </p>
              <p className="font-bold text-gray-900">100$</p>
            </div>
            <div onClick={() => toggleFavorite(5)}>
              {favorites[5] ? (
                <MdFavorite className="text-red-500 text-xl" />
              ) : (
                <MdFavoriteBorder className="text-xl" />
              )}
            </div>
          </div>
          <div className="text-center">
            <div>
              <p
                href="#"
                className="text-sm font-medium text-gray-500 transition duration-300 cursor-pointer hover:scale-105 hover:text-gray-900"
              >
                checkout
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-12 top-10 hidden sm:block bg-white px-2 py-3 rounded-xl shadow-xl border-1 border-gray-100 hover:scale-105 transition-all duration-300 ">
          <div className="flex items-center justify-center gap-2">
            <div>
              <p className="text-xs font-semibold text-gray-900">
                Add to Wishlist
              </p>
              <p className="font-bold text-gray-900">100$</p>
            </div>
            <div onClick={() => toggleFavorite(6)}>
              {favorites[6] ? (
                <MdFavorite className="text-red-500 text-xl" />
              ) : (
                <MdFavoriteBorder className="text-xl" />
              )}
            </div>
          </div>
          <div className="text-center">
            <div>
              {/* here */}
              <p
                href="#"
                className="text-sm font-medium text-gray-500 transition duration-300 cursor-pointer hover:scale-105 hover:text-gray-900"
              >
                checkout
              </p>
              {/* to here */}
            </div>
          </div>
        </div>
        <div className="absolute right-80 bottom-8 hidden xlarge:block bg-white px-2 py-3 rounded-xl shadow-xl border-1 border-gray-100 hover:scale-105 transition-all duration-300 ">
          <div className="flex items-center justify-center gap-2">
            <div>
              <p className="text-xs font-semibold text-gray-900">
                Add to Wishlist
              </p>
              <p className="font-bold text-gray-900">100$</p>
            </div>
            <div onClick={() => toggleFavorite(7)}>
              {favorites[7] ? (
                <MdFavorite className="text-red-500 text-xl" />
              ) : (
                <MdFavoriteBorder className="text-xl" />
              )}
            </div>
          </div>
          <div className="text-center">
            <div>
              <p
                href="#"
                className="text-sm font-medium text-gray-500 transition duration-300 cursor-pointer hover:scale-105 hover:text-gray-900"
              >
                checkout
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-32 rounded-lg bg-gray-100">
        <div className="bg-white m-4 rounded-lg flex justify-between items-center overflow-x-auto scrollbar-hide scroll-smooth gap-2 p-2">
          <div className="py-3 px-5 min-w-[180px] w-[180px] hover:shadow-lg border border-gray-100 rounded-xl transition-all duration-300">
            <div className="flex flex-row-reverse items-start justify-between">
              <img
                src="https://randomuser.me/api/portraits/women/6.jpg"
                alt="User profile"
                className="size-7 rounded-full object-cover"
              />

              <div>
                <p className="text-gray-700 text-xs font-semibold">
                  Sophia Wilson
                </p>
                <h3 className="text-lg/tight font-bold text-gray-900">
                  180K Followers
                </h3>
              </div>
            </div>
            <p className="mt-2 text-gray-500 text-xs">
              Eco-friendly Cleaning Expert
            </p>
          </div>

          <div className="py-3 px-5 w-[180px] min-w-[180px] hover:shadow-lg border border-gray-100 rounded-xl transition-all duration-300">
            <div className="flex flex-row-reverse items-start justify-between">
              <img
                src="https://randomuser.me/api/portraits/men/7.jpg"
                alt="User profile"
                className="size-7 rounded-full object-cover"
              />

              <div>
                <p className="text-gray-700 text-xs font-semibold">
                  Daniel Carter
                </p>
                <h3 className="text-lg/tight font-bold text-gray-900">
                  250K Followers
                </h3>
              </div>
            </div>
            <p className="mt-2 text-gray-500 text-xs">
              Home Organization Specialist
            </p>
          </div>

          <div className="py-3 px-5 w-[180px] min-w-[180px] hover:shadow-lg border border-gray-100 rounded-xl transition-all duration-300">
            <div className="flex flex-row-reverse items-start justify-between">
              <img
                src="https://randomuser.me/api/portraits/women/8.jpg"
                alt="User profile"
                className="size-7 rounded-full object-cover"
              />

              <div>
                <p className="text-gray-700 text-xs font-semibold">
                  Isabella Rivera
                </p>
                <h3 className="text-lg/tight font-bold text-gray-900">
                  320K Followers
                </h3>
              </div>
            </div>
            <p className="mt-2 text-gray-500 text-xs">
              Natural Skincare Enthusiast
            </p>
          </div>

          <div className="py-3 px-5 w-[180px] min-w-[180px] hover:shadow-lg border border-gray-100 rounded-xl transition-all duration-300">
            <div className="flex flex-row-reverse items-start justify-between">
              <img
                src="https://randomuser.me/api/portraits/men/9.jpg"
                alt="User profile"
                className="size-7 rounded-full object-cover"
              />

              <div>
                <p className="text-gray-700 text-xs font-semibold">
                  Michael Adams
                </p>
                <h3 className="text-lg/tight font-bold text-gray-900">
                  500K Followers
                </h3>
              </div>
            </div>
            <p className="mt-2 text-gray-500 text-xs">
              Sustainable Home Cleaning Tips
            </p>
          </div>

          <div className="py-3 px-5 w-[180px] min-w-[180px] hover:shadow-lg border border-gray-100 rounded-xl transition-all duration-300">
            <div className="flex flex-row-reverse items-start justify-between">
              <img
                src="https://randomuser.me/api/portraits/women/10.jpg"
                alt="User profile"
                className="size-7 rounded-full object-cover"
              />

              <div>
                <p className="text-gray-700 text-xs font-semibold">
                  Emma Thompson
                </p>
                <h3 className="text-lg/tight font-bold text-gray-900">
                  620K Followers
                </h3>
              </div>
            </div>
            <p className="mt-2 text-gray-500 text-xs">
              Luxury Beauty & Skincare Brand Owner
            </p>
          </div>
        </div>

        <div className="bg-white m-4 rounded-lg min-h-16">
          <div className="mx-6 mt-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">PRODUCTS</h3>
            <a
              className="inline-block text-gray-600 py-3 text-sm font-medium text-black transition hover:scale-110 ml-4"
              href="#"
            >
              VISIT NOW
            </a>
          </div>
          <div className="flex mx-5 overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] w-[150px] relative">
              <img
                alt="Disinfectant Spray"
                src="https://www.netmeds.com/images/product-v1/400x400/899912/dettol_multi_purpose_disinfectant_spray_for_hard_soft_surfaces_spring_blossom_225_ml_0_1.webp"
                className="h-30 w-full object-fit rounded-lg"
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
              <div className="bg-white p-2">
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Antibacterial Disinfectant Spray
                </p>
                <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                  $12.99
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] w-[150px] relative">
              <img
                alt="Organic Hand Sanitizer"
                src="https://i5.walmartimages.com/seo/Equate-Aloe-Hand-Sanitizer-32-fl-oz_98a47c30-9267-4f9d-974c-f488f69f37a3.73c07a1c57715b39e76865a1be4a538a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                className="h-30 w-full object-fit rounded-lg"
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
              <div className="bg-white p-2">
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Organic Aloe Vera Hand Sanitizer
                </p>
                <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                  $8.49
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] w-[150px] relative">
              <img
                alt="Eco-Friendly Floor Cleaner"
                src="https://m.media-amazon.com/images/I/61W8NHxqS8L.jpg"
                className="h-30 w-full object-fit rounded-lg"
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
              <div className="bg-white p-2">
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Eco-Friendly Floor Cleaner
                </p>
                <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                  $15.99
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] w-[150px] relative">
              <img
                alt="Charcoal Face Masks"
                src="https://www.themancompany.com/cdn/shop/files/2_5ee5b629-e361-4d06-88a4-b95b4a7cb7c4.jpg?v=1696943016"
                className="h-30 w-full object-fit rounded-lg"
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
              <div className="bg-white p-2">
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Activated Charcoal Face Masks
                </p>
                <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                  $19.99
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg m-2 min-w-[150px] w-[150px] relative">
              <img
                alt="Gentle Hand Wash"
                src="https://www.greenworx.in/cdn/shop/products/hand-wash.jpg?v=1675666109"
                className="h-30 w-full object-fit rounded-lg"
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
              <div className="bg-white p-2">
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Gentle Hydrating Hand Wash
                </p>
                <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                  $6.99
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
