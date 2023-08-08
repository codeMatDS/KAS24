import { MutableRefObject, SetStateAction, Dispatch } from "react";

const handleClick = (
  index: number,
  setActiveToggleIndex: Dispatch<SetStateAction<number>>,
  // setActiveToggleIndex: Dispatch<SetStateAction<number | null>>,
  tipRefs: MutableRefObject<(HTMLDivElement | null)[]>
) => {
  // setActiveToggleIndex(() => {
  //   console.log("s");
  // });

  // setActiveToggleIndex((prev) => {
  //   console.log("AAA");
  //   if (prev === index) {
  //     return null;
  //   }
  //   return index;
  // });

  setActiveToggleIndex((prevActiveIndex) => {
    console.log("ssssszz");

    console.log("prevActiveIndex", prevActiveIndex);
    console.log("index", index);
    if (prevActiveIndex === index) {
      tipRefs.current[index]?.setAttribute("aria-expanded", "false");
      return null;
    }

    tipRefs.current[prevActiveIndex]?.setAttribute("aria-expanded", "false");
    tipRefs.current[index]?.setAttribute("aria-expanded", "true");
    return index;
  });
};

export default handleClick;
