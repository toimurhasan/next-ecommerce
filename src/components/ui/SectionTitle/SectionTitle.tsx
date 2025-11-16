import React from "react";
interface SectionTitleProps {
  title: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="bg-[url(/bg-cat.jpg)]  h-[88px] text-white flex justify-center items-center">
      <h2 className="text-4xl uppercase font-semibold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
