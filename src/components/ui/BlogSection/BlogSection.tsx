import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleBlog from "./SingleBlog";

const BlogSection = () => {
  return (
    <>
      <SectionTitle title="our new blog" />
      <div className="lg:py-5 py-2 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5 px-2 lg:px-0">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </>
  );
};

export default BlogSection;
