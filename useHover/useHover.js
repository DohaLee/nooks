import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
  const ref = useRef();
  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }
    const element = ref.current;
    if (element) {
      element.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", onHover);
      }
    };
  }, [onHover]);
  return ref;
};
