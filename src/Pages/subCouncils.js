import React from "react";
import img from "./assets/psmscclub-bg.png";
import SubCouncilCard from "./SubCouncilCard";

const subCouncilData = [
  {
    name: "Print Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    name: "Print Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    name: "Print Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    name: "Print Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    name: "Print Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    name: "Print Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    name: "Print Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    name: "Print Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
];

const subCouncils = () => {
  return (
    <div className='bg-purple-200 p-20 pt-18'>
      {/* <----------- Heading --------------------> */}
      <div className='w-auto flex'>
        <h1 className='font-medium text-4xl font-bold mt-0 mb-10 mx-auto text-black'>
          Sub-Councils of HBTU
        </h1>
      </div>

      <div className='p-6 lg:px-34 xl:px-64  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28'>
        {/* <------------Cards--------------------> */}
        {subCouncilData.map((subCouncilData1) => (
          <SubCouncilCard subCouncilData={subCouncilData1} />
        ))}
      </div>
    </div>
  );
};

export default subCouncils;
