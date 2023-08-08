import React, { useState, useRef, useEffect } from "react";
// import useClickOutside from "../hooks/useClickOutside";
import StatisticCard from "./StatisticCard";
import Tooltip from "./Tooltip";

interface CardProps {
  index: number;
  title: string;
  current: number;
  previous: number;
  active: boolean;
  setActive: (id: number | null) => void;
  // ref: React.RefObject<HTMLDivElement>;
  // registerRef: (ref: React.RefObject<HTMLDivElement>, index: number) => void;
  registerRef: (
    ref: React.RefObject<HTMLDivElement>,
    buttonRef: React.RefObject<HTMLButtonElement>,
    index: number
  ) => void;
}

const Card = ({
  index,
  current,
  previous,
  title,
  active,
  setActive,
  // ref, // Referencia pasada desde TabPanel
  registerRef,
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tooltipRef = useRef(null);
  const buttonRef = useRef(null);

  // const [isExpanded, setIsExpanded] = useState(false);
  const togglePanel = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
    setActive(active ? null : index);
  };

  useEffect(() => {
    if (!active) {
      setIsExpanded(false);
    }
  }, [active]);

  // Register the ref in the parent component (TabPanel) new
  // useEffect(() => {
  //   registerRef(ref, index);
  // }, [registerRef, ref, index]);
  useEffect(() => {
    registerRef(tooltipRef, buttonRef, index);
  }, [registerRef, tooltipRef, buttonRef, index]);

  // Hook useClickOutside con la referencia del componente Card
  // useClickOutside(ref, () => setActive(null));

  // Esto funcionaba [1]
  // const [isExpanded, setIsExpanded] = useState(false);
  // const ref = useRef(null);
  // const buttonRef = useRef(null);

  // useClickOutside(ref, buttonRef, () => active && setActive(null));
  //para que no se corra 16 veces
  // useClickOutside([ref], () => setActive(null));
  // useClickOutside(ref, buttonRef, () => setIsExpanded(false));

  // const togglePanel = () => {
  //   setIsExpanded((prevExpanded) => {
  //     // console.log(`isExpanded: ${isExpanded} -> ${!prevExpanded}`);
  //     return !prevExpanded;
  //   });
  //   // Cambia el indice activo entre todos
  //   setActive(index);
  // };

  //Si el indice general cambia y no es este, lo cerramos
  // useEffect(() => {
  //   if (!active) {
  //     setIsExpanded(false);
  //   }
  // }, [active]);

  return (
    <StatisticCard title={title} current={current} previous={previous}>
      {/* <p>{isExpanded ? " [Exp]" : " [NExp]"}</p> */}
      {/* <p>{active ? " [A]" : " [NA]"}</p> */}
      <button
        type="button"
        aria-label="More options"
        aria-haspopup="true"
        aria-expanded={active ? isExpanded : false}
        onClick={togglePanel}
        className="toggle-button transition-all z-20 p-1 hover:filter-white"
        ref={buttonRef}
      >
        <img src="./images/icon-ellipsis.svg" alt="" width={21} height={5} />
      </button>
      <Tooltip
        index={index}
        title={title}
        current={current}
        previous={previous}
        ref={tooltipRef}
      />
    </StatisticCard>
  );
};

export default Card;
