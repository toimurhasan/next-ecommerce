import CategoryBar from "@/components/shared/CategoryBar/CategoryBar";
import Navbar from "@/components/shared/Navbar/Navbar";
import Hero from "./Hero";
import AllCategories from "@/components/ui/AllCategories/AllCategories";
import OurTopSellingProducts from "@/components/ui/OurTopSellingProducts/OurTopSellingProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Hero />
      <div className="py-5">
        <AllCategories />
      </div>
      <div>
        <OurTopSellingProducts />
      </div>
    </>
  );
};

export default Home;
