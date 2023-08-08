import { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T[]>,
  action: () => void
) => {
  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      // console.log("event.target", event.target);
      // console.log("ref.current", ref.current);
      if (
        ref.current &&
        !ref.current.some((el) => el.contains(event.target as Node))
      ) {
        action();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [ref, action]);
};

export default useClickOutside;
