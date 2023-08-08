import { useEffect } from "react";

const useKeyPress = (targetKey: string, action: () => void): void => {
  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        action();
      }
    };

    document.addEventListener("keydown", downHandler);

    return () => {
      document.removeEventListener("keydown", downHandler);
    };
  }, [targetKey, action]);
};

export default useKeyPress;
