import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    const element = ref.current;
    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref;
};
