import React, { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  action: () => void
) => {
  useEffect(() => {
    const clickOutsideHandler = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        action();
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);
    document.addEventListener("touchstart", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
      document.removeEventListener("touchstart", clickOutsideHandler);
    };
  }, [ref, action]);
};

export default useClickOutside;
