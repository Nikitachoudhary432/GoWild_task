import React from "react";

const Home = () => {
  return (
    <div className="Home relative" id="home">
      <img
        src="/Rectangle.svg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="About Image"
      />
      <div className="container p-4 relative z-10">
        <div className="row mt-4 ">
          <div className="col-md-6 text-left mt-5">
            <h6 className="text-[#253D65] font-bold text-3xl">“Go Wild:</h6>
            <h3 className="text-[#253D65] font-bold text-5xl">
              Discover, Explore, Go Wild!”
            </h3>
            <p className="font-md text-base my-6">
              Welcome to 'Go WIld ,' where adventure knows no bounds. With us,
              you'll embark on journeys of discovery, where the unexplored
              becomes your playground. Dive into the beauty of untouched
              landscapes, wander through hidden trails, and unlock the secrets
              of the world's most extraordinary destinations. Unleash your inner
              explorer and redefine what's possible. Begin your odyssey today.
            </p>
            <button className="border-none rounded-lg px-8 py-2 bg-white font-medium text-[#06C8F7]">
              Explore Now
            </button>
          </div>
          <div className="col-md-6 flex justify-end items-end">
            <img src="./Home.svg" alt="" className="p-4 w-[370px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
