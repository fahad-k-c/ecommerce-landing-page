import React, { useState } from "react";
import { MdArrowOutward, MdExpandMore, MdExpandLess } from "react-icons/md";
import { MdVerified } from "react-icons/md";

const Reviews = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="px-8 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg text-gray-900 font-semibold">
          Customer Reviews
        </h2>
        <div className="flex items-center gap-1">
          <p className="text-gray-500 font-semibold">Verified </p>
          <MdVerified className="text-gray-500" />
        </div>
      </div>
      <hr className="my-3 text-gray-400" />

      {/* Review Item 1 */}
      <div className="flex justify-between">
        <div>
          <p className="text-md font-semibold">Anttibacterial Hand Wash</p>
          <div className="mt-1 flex gap-1">
            <div className="bg-gray-200 size-10 rounded-full bg-[url('https://randomuser.me/api/portraits/women/19.jpg')] bg-cover"></div>
            <div className="bg-gray-200 size-10 rounded-full bg-[url('https://randomuser.me/api/portraits/men/12.jpg')] bg-cover"></div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <p className="text-gray-500 text-sm">Reviewed by: Sarah L.</p>
          <div className="bg-gray-200 px-3 py-1 rounded-full ">
            <p className="text-md font-semibold">$12.99</p>
          </div>
        </div>
      </div>
      <hr className="my-3 text-gray-400" />

      {/* Review Item 2 */}
      <div className="flex justify-between">
        <div>
          <p className="text-md font-semibold">Organic Surface Cleaner</p>
          <div className="mt-1 flex gap-1">
            <div className="bg-gray-200 size-10 rounded-full bg-[url('https://randomuser.me/api/portraits/men/10.jpg')] bg-cover"></div>
            <div className="bg-[url('https://randomuser.me/api/portraits/women/9.jpg')] size-10 rounded-full bg-cover"></div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <p className="text-gray-500 text-sm">Reviewed by: Mark R.</p>
          <div className="bg-gray-200 px-3 py-1 rounded-full">
            <p className="text-md font-semibold">$8.50</p>
          </div>
        </div>
      </div>
      <hr className="my-3 text-gray-400" />

      {/* Dropdown for Review Filtering */}
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-md text-gray-900 font-semibold">Filter Reviews</h2>
        <button
          className="flex items-center text-gray-900 font-semibold cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Hide Filters" : "Show Filters"}
          {showMore ? (
            <MdExpandLess className="ml-1" />
          ) : (
            <MdExpandMore className="ml-1" />
          )}
        </button>
      </div>

      {/* Dropdown Content */}
      {showMore && (
        <div className="bg-gray-100 p-4 mt-3 rounded-lg">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sort by:
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-lg cursor-pointer">
            <option value="latest">Latest</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
          </select>
        </div>
      )}

      {/* Featured Review */}
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-xl text-gray-900 font-semibold">Featured Review</h2>
        <MdArrowOutward className="text-xl font-semibold cursor-pointer hover:scale-105 transition-all duration-300 active:translate-y-1" />
      </div>
      <p className="mt-4 text-sm text-gray-500 pr-10">
        "I've been using this antibacterial hand wash for months, and it's
        absolutely amazing! My hands feel soft, and I love the scent. Highly
        recommend!" - Jessica T.
      </p>
    </div>
  );
};

export default Reviews;
