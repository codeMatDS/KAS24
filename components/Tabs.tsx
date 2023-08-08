// import React from "react";
//TODO CONVERT ALL THIS TO A PARENT COMPONENT
import data from "../utils/ui_text.json";

interface TabsProps {
  activeTab: number;
  setActiveTab: (tabIndex: number) => void;
  // timeFrames: Record<string, string>;
}

// const Tabs = ({ activeTab, setActiveTab, timeFrames }: TabsProps) => {
const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <ul
      role="tablist"
      aria-label="Time tracking tabs"
      //  pt-[26px] lg:py-6
      className="flex justify-around lg:flex-col"
    >
      {Object.keys(data.timeFrames).map((timeFrame: string, index: number) => (
        <li key={index} role="presentation" className="w-full">
          <button
            id={`tab-button-${index}`}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tab-panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            className="tab-button | lg:tab-button-padding  w-full py-6 leading-[21px] hover:text-very-soft-blue text-desaturated-blue"
            onClick={() => handleTabClick(index)}
          >
            {data.timeFrames[timeFrame]}
          </button>
        </li>
      ))}
    </ul>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch("/data/ui_text.json");
//   const data = await res.json();

//   return {
//     props: {
//       timeFrames: data.timeFrames,
//     },
//   };
// };

export default Tabs;
