import React from "react";
import SmallCard from "../Cards/SmallCard";
import LargeCard from "../Cards/LargeCard";
import SmallestCard from "../Cards/SmallestCard";

const AllCategories = () => {
  return (
    <>
      <div className="bg-[url(/bg-cat.jpg)]  h-[88px] text-white flex justify-center items-center">
        <h2 className="text-4xl uppercase font-semibold">Our All Categories</h2>
      </div>
      <div className="py-5 grid grid-cols-5 gap-5">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className="py-5 grid grid-cols-3 gap-5">
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
      </div>
      <div className="py-5 grid grid-cols-6 gap-5">
        <div className="col-span-2 row-span-2">
          <LargeCard />
        </div>
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
        <SmallestCard />
      </div>
    </>
  );
};

export default AllCategories;
