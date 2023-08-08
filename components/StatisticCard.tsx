import { ReactNode, useState } from "react";

interface StatisticCardProps {
  title: string;
  current: number;
  previous: number;
  children: ReactNode;
}

const getColor = (title: string) => {
  return "bg-work";
};

const getClass = (title: string) => {
  switch (title) {
    case "Work":
      return "bg-light-red bg-work";
    case "Play":
      return "bg-soft-blue bg-play";
    case "Study":
      return "bg-light-red-aux bg-study";
    case "Exercise":
      return "bg-lime-green bg-exercise";
    case "Social":
      return "bg-violet bg-social";
    case "Self Care":
      return "bg-soft-orange bg-self-care";
    default:
      return "bg-soft-blue bg-play";
  }
};

const StatisticCard = ({
  title,
  current,
  previous,
  children,
}: StatisticCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`icon-bg h-full relative rounded-2xl transition-all ${getClass(
        title
      )} ${isHovered ? "pt-[40px]" : "pt-[45px]"}`}
    >
      {/* <img
        src={image}
        // alt=""
        // style={{
        //   position: "absolute",
        //   top: "0px",
        //   left: "0px",
        //   width: "255px",
        //   height: "160px",
        // }}
        // width={90} height={90}
        className="icon"
      /> */}
      <div
        className="relative transition h-full rounded-2xl bg-dark-blue p-8 lg:p-card hover:bg-light-blue"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between">
          {/* <h2 className="font-medium">{title}</h2>
          <a href="#" className="absolute inset-0 z-10 rounded-2xl">
            <span className="sr-only">Details for {title}</span>
          </a> */}
          <h2 className="font-medium mt-[3px]">
            <a href="#" className="card-link">
              <span className="sr-only">Details for </span>
              {title}
            </a>
          </h2>
          <div className="relative">{children}</div>
        </div>

        <p className="text-[56px] font-light leading-[66px] lg:p-card-hours">
          {current}hrs
        </p>
        <p className="text-pale-blue text-[15px]">Last Week - {previous}hrs</p>
      </div>
    </div>
  );
};

export default StatisticCard;
