import { useEffect, RefObject, MutableRefObject } from "react";

type Event = MouseEvent | TouchEvent;
type Refs<T extends HTMLElement[]> = RefObject<T>;

const useClickOutside = <T extends HTMLElement>(
  refs: Refs<T[]>,
  action: () => void
) => {
  useEffect(() => {
    const clickOutsideHandler = (event: Event) => {
      const allRefs = Array.isArray(refs) ? refs : [refs];

      if (
        allRefs.every(
          (ref) => ref.current && !ref.current.contains(event.target as Node)
        )
      ) {
        action();
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);
    document.addEventListener("touchstart", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
      document.removeEventListener("touchstart", clickOutsideHandler);
    };
  }, [refs, action]);
};

export default useClickOutside;
