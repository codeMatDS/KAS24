import React, { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

const useClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  action: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        refs.every(
          (ref) => ref.current && !ref.current.contains(event.target as Node)
        )
      ) {
        console.log("You clicked outside of meQ!", refs);
        action();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [refs, action]);
};

// const useClickOutside = (
//   ref: React.RefObject<HTMLElement>,
//   buttonRef: React.RefObject<HTMLElement>,
//   action: () => void
// ) => {
//   useEffect(() => {
//     const handleClickOutside = (event: Event) => {
//       if (
//         ref.current &&
//         !ref.current.contains(event.target as Node) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target as Node)
//       ) {
//         console.log("You clicked outside of me!");
//         action();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("touchstart", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [ref, buttonRef, action]);
// };

// const useClickOutside = (
//   ref: React.RefObject<HTMLElement>,
//   action: () => void
// ) => {
//   useEffect(() => {
//     const clickOutsideHandler = (event: Event) => {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         action();
//       }
//     };

//     document.addEventListener("mousedown", clickOutsideHandler);
//     document.addEventListener("touchstart", clickOutsideHandler);

//     return () => {
//       document.removeEventListener("mousedown", clickOutsideHandler);
//       document.removeEventListener("touchstart", clickOutsideHandler);
//     };
//   }, [ref, action]);
// };

export default useClickOutside;
