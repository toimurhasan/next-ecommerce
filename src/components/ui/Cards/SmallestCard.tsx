import React from "react";

const SmallestCard = () => {
  return (
    <div className="bg-[url(/sm-card-bg.png)] h-44 bg-cover bg-gray-400 bg-blend-overlay  bg-center relative">
      <h3 className="uppercase text-center italic font-bold py-1 text-[#6EB1FE]">
        tecno camon 40 pro
      </h3>
      <img
        src="phone-sm.png"
        alt="phone-sm"
        className="w-24 absolute top-7.5 left-14"
      />
      <span className="absolute bottom-2 left-11 bg-white px-2 py rounded-full">
        ৳27999{" "}
        <span className="text-gray-400">
          ৳<span className="line-through">29999</span>
        </span>
      </span>
    </div>
  );
};

export default SmallestCard;
