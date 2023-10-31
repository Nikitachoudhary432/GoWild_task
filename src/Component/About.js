import React from "react";

const About = () => {
  return (
    <div className="About relative">
      <img
        src="/about.svg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="About Image"
      />
      <div className="container relative p-1 z-10">
        <div className="">
          <div className="text-left mt-5 flex">
            <div className="w-full">
              <img src="./tree.svg" alt="" className=" mr-2 h-[261px] w-[70%]" />
            </div>
            <div className="w-full">
              <h3 className=" font-bold text-5xl">
                We're Currently Hiring Guides
              </h3>
              <p className="font-md text-base my-6">
                Are you passionate about the outdoors, an excellent storyteller,
                and known for your humility and kindness with people? If so,
                we're looking for individuals like you to join our team of
                guides. Share your expertise, inspire others, and make a
                difference in the world of outdoor adventures. Register yourself
                today and embark on a rewarding journey with us.
              </p>
              <button className="border-none rounded-lg px-8 py-2 mb-2 bg-white font-medium text-[#06C8F7]">
                Register as Guide
              </button>
              <p>Register as a guide and fill out the Google form.</p>
            </div>
          </div>
          <div className="text-left mt-5 flex">
            <div >
              <h3 className="text-center font-bold text-5xl">
                “GoWild: Discover , Explore , GoWild!”
              </h3>
              <p className=" text-center font-md text-base mt-2 ">
                Don’t wait, Downloads the app , plan your trip....!
              </p>
             <div className="flex-col lg:flex justify-center">
             <img src="./zomato.svg" alt="" className="p-4 w-[175px] h-24" />
              <img src="./appstore.svg" alt="" className="p-4 w-[175px] h-24" />
             </div>
            </div>
            <div className="flex justify-end">
              <img src="./women.svg" alt="" className="p-4 w-[70%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
