import React from "react";

const Faq = () => {
  const list = [
    { name: "What is 'My App Name,' and how does it work?" },
    { name: "How can I record my outdoor adventures using the app?" },
    { name: "What's the benefit of connecting with other users on the app?" },
    { name: "How do I hire a local guide through the app?" },
    { name: "Is my payment information secure when booking guides or..." },
    { name: "How can I create a personalized profile on the app?" },
    { name: "Are there any current job openings for guides?" },
    { name: "Can I use the app on both iOS and Android devices?" },
    { name: "Can I use the app while offline, such as in remote areas with..." },
    { name: "Are BNS domains considered as an NFT?" },
  ];

  // Split the list into two separate arrays
  const firstColumn = list.slice(0, 5);
  const secondColumn = list.slice(5);

  return (
    <div className="container py-2 w-full relative mt-4" id="about">
      <h1 className="text-2xl lg:text-3xl">Frequently Asked Questions (FAQ)</h1>
      <p>Related to your app and their corresponding answers</p>
      <div className="flex flex-col gap-5 sm:gap-7 pt-3 sm:pt-14">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/2">
            {firstColumn.map((item, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#FFFFFF]"
                } p-4 my-2 rounded-lg shadow-lg shadow-black/50`}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="w-full sm:w-1/2">
            {secondColumn.map((item, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#FFFFFF]"
                } p-4 my-2 rounded-lg shadow-lg shadow-black/50`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
