import React from "react";

const SingleBlog = () => {
  return (
    <div className="bg-gray-200 ">
      <img src="fruit.png" alt="" />
      <div className="flex px-2 pt-2">
        <h3>প্রতিদিনের রুটিতে লাল আটা কেন রাখবেন – জানুন ৮টি বৈজ্ঞানিক কারণ</h3>
        <p className="text-xs">OCT 23, 2025</p>
      </div>
      <div className="text-white bg-black py-2 text-center m-2 hover:bg-primary-500 cursor-pointer font-semibold">
        Read More
      </div>
    </div>
  );
};

export default SingleBlog;
