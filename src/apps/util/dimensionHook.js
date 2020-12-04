import { useState, useEffect } from "react";
import { breakpoints } from "./constants";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  const setScreenType = () => {
    const { mobile, tablet, laptop, largeScreen } = breakpoints;

    if (width <= mobile) return "isMobile";
    if (width <= tablet) return "isTablet";
    if (width <= laptop) return "isLaptop";
    if (width >= laptop) return "isLargeScreen";
  };

  const screenType = setScreenType();

  return {
    width,
    height,
    "type" : screenType,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
