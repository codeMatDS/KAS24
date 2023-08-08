import data from "../utils/time_entries.json";
import useClickOutside from "../hooks/useClickOutside";
import { useRef, useState, useCallback } from "react";
import Card from "./Card";
import React from "react";
import useKeyPress from "../hooks/useKeyPress";

type TimeFrames = {
  [key in "daily" | "weekly" | "monthly"]: {
    current: number;
    previous: number;
  };
};

interface TabPanelProps {
  activeIndex: number;
  index: number;
  mode: keyof TimeFrames;
}

const TabPanel = ({ activeIndex, index, mode }: TabPanelProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const tooltipRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const buttonRefs = useRef<React.RefObject<HTMLButtonElement>[]>([]);

  const registerRef = useCallback(
    (
      tooltipRef: React.RefObject<HTMLDivElement>,
      buttonRef: React.RefObject<HTMLButtonElement>,
      index: number
    ) => {
      tooltipRefs.current[index] = tooltipRef;
      buttonRefs.current[index] = buttonRef;
    },
    []
  );

  useClickOutside([...tooltipRefs.current, ...buttonRefs.current], () => {
    if (activeIndex === index) {
      setActiveCard(null);
    }
  });

  useKeyPress("Escape", () => {
    if (activeIndex === index) {
      setActiveCard(null);
    }
  });

  return (
    <div
      role="tabpanel"
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-button-${index}`}
      hidden={activeIndex !== index}
      tabIndex={activeIndex === index ? 0 : -1}
      className="h-full"
    >
      <ul
        role="list"
        className="grid h-full sm:grid-cols-2 md:grid-cols-3 gap-[30px]"
      >
        {data.map((item, index) => (
          <li role="listitem" key={index}>
            <Card
              index={index}
              {...item}
              current={item.timeframes[mode].current}
              previous={item.timeframes[mode].previous}
              active={index === activeCard}
              setActive={setActiveCard}
              registerRef={registerRef}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabPanel;
