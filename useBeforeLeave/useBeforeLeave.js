import { useEffect } from "react";
export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    const handle = ({ clientY }) => {
      if (clientY <= 0) {
        onBefore();
      }
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [onBefore]);
};
