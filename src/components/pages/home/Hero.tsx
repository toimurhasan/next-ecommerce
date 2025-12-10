import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center mb-4 bg-green-50">
      <Image
        src="/banner.png"
        alt="banner-img"
        width={1337}
        height={420}
        priority
      />
    </div>
  );
};

export default Hero;
