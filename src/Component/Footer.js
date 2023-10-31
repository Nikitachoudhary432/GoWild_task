import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-gray-900 bg-[#253D65] " id="guide">
      <div className="py-10 px-6 sm:px-12 relative grid gap-7 ">
        <div className="grid lg:gap-20 gap-5 lg:grid-cols-3">
          <div>
            <img src="/name.svg" />
            <span className="text-base text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been
            </span>
            <img src="/Frame.svg" className="mt-4" />
          </div>
          <div className="grid gap-4">
            <div className="lg:py-3 py-2 px-5 flex w-full justify-between text-white">
              <div>
                <h1>Quick Links</h1>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
              </div>
              <div>
                <h1>About Us</h1>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
              </div>
              <div>
                <h1>Contacts</h1>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
              </div>
            </div>
            {/* <div className="text-sm ml-2 md:ml-5">
              For Marketing : <span> Marketing@bictory.io </span> For Business :
              <span>Business@bictory.io</span>
            </div> */}
          </div>
          <div className="grid gap-4">
            <div className="lg:py-3 py-2 px-5 bg-[#FFFFFF4D] text-white text-center">
              <h3 className="text-2xl my-2">Subscribe!</h3>
              <p className="text-sm my-2">
                Subscribe to our website and stay updated
              </p>
              <input
                placeholder="Email"
                className="border border-white bg-transparent rounded-md p-2"
              />
              <div>
                <button className="bg-white text-[#31E3AE] px-5 py-2 mt-6 rounded-lg" >Submit</button>
              </div>
            </div>
          </div>
        </div>
          <div className="text-white border-t-2 border-green-300 pt-2" >Copyrights@2023. All rights reserved</div>
        </div>
      </div>
  );
};

export default Footer;
