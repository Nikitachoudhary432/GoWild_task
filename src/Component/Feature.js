import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineStar } from "react-icons/ai";

const Data = [
  {
    text: "Beach",
  },
  {
    text: "Mountain",
  },
  {
    text: "WaterFalls",
  },
];
const locate = [
  {
    text: "Sunrise",
  },
  {
    text: "Water sports",
  },
  {
    text: "Sunset",
  },
  {
    text: "Swimming",
  },
];

const list = [
  { name: "Chadar Trek", location: "Leh Ladakh " },
  {
    name: "Living Roots Bridges of Meghalaya",
    location: "Leh Ladakh ",
  },
  { name: "Jaisalmer Fort", location: "Leh Ladakh " },
  { name: "Valley of flower", location: "Leh Ladakh " },
  { name: "Cabo De Rama Beach", location: "Leh Ladakh " },
  { name: "Cabo De Rama Beach", location: "Leh Ladakh " },
];

const Feature = () => {
  const [isExploreClicked, setExploreClicked] = useState(false);

  const toggleExplore = () => {
    setExploreClicked(!isExploreClicked);
  };

  return (
    <div className="flex flex-col justify-around items-center mb-4" id="features">
      <div className="flex-col lg:flex-row flex w-full justify-between my-7">
        <div className="flex justify-center items-center w-full">
          <h1 className="text-3xl font-semibold">Popular Places</h1>
        </div>
        <div className="flex-col lg:flex-row flex justify-evenly items-center w-full">
          {Data.map((temp, index) => (
            <div key={index} className="flex justify-between">
              {temp.text}
            </div>
          ))}
          <button className="flex items-center">
            View All <BsArrowRight color="#06C8F7" size="30" className="ml-2" />
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {list.map((item, index) => (
            <div
              key={item.name}
              className="bg-[#FFFFFF] p-4 rounded-lg shadow-lg shadow-black/50"
            >
              <>
                <p>
                  <div className="relative">
                    <img
                      src="/image.png"
                      alt={item.name}
                      className="w-[375px] h-[227px]"
                    />
                    <div className="absolute bottom-0 left-3 top-52 right-3 bg-opacity-80 bg-white p-4 flex justify-between rounded-lg shadow-lg shadow-black/50">
                      <p className="flex items-center">
                        <AiOutlineStar /> 4.4
                      </p>
                      <h2 className="flex items-center">
                        <img
                          src="/account.svg"
                          alt="Account Icon"
                          className="mr-2"
                        />{" "}
                        235 visitors
                      </h2>
                    </div>
                  </div>

                  <p className="text-base font-semibold mt-5">{item.name}</p>
                </p>
                <p className="flex text-[#A9A9A9] border-b-2 py-3">
                  <GrLocation color="#A9A9A9" size="30" className="ml-2" />
                  {item.location}
                </p>

                <div className="flex-col lg:flex justify-evenly items-end mt-3">
                  <div className="grid grid-cols-2 grid-rows-2 ">
                    {locate.map((temp, index) => (
                      <div key={index} className="flex justify-between">
                        <p className="bg-[#A7DBF5] rounded-lg text-xs flex items-center p-2 m-1">
                          {temp.text} <RxCrossCircled className="ml-2" />
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    {" "}
                    <button
                      className="btn flex font-semibold text-lg"
                      onClick={toggleExplore}
                    >
                      Explore{" "}
                      <BsArrowRight
                        color="#06C8F7"
                        size="30"
                        className="ml-2"
                      />
                    </button>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
      {isExploreClicked && (
        <div className="container mx-auto">
          {/* New grid to be displayed when "Explore" is clicked */}
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {/* Add elements and content for the new grid here */}
            {/* For example: */}
            <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-lg shadow-black/50">
              {/* Content for the new grid */}
              <p>New Grid Content</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
