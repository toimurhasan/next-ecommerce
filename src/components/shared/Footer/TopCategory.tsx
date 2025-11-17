import React from "react";

const TopCategory = () => {
  return (
    <div>
      <h3 className="uppercase text-primary-500 font-semibold">Top Category</h3>
      <div className="text-white space-y-3 py-4 text-sm">
        <div className="uppercase cursor-pointer">Fashion</div>
        <div className="uppercase cursor-pointer">Smart phone</div>
        <div className="uppercase cursor-pointer">Electronics</div>
        <div className="uppercase cursor-pointer">Grocery</div>
        <div className="uppercase cursor-pointer">beauty</div>
        <div className="uppercase cursor-pointer">Furniture</div>
        <div className="uppercase cursor-pointer">toys</div>
      </div>
    </div>
  );
};

export default TopCategory;
