import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const elem = element.current;
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullscreen) {
        elem.mozRequestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
