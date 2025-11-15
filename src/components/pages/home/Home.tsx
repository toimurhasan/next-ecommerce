import CategoryBar from "@/components/shared/CategoryBar/CategoryBar";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Hero />
    </>
  );
};

export default Home;
