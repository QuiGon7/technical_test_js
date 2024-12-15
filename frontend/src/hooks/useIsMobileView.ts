import { useState, useEffect } from "react";

export const useIsMobileView = (maxWidth: number = 720) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handleResize = () => setIsMobileView(mediaQuery.matches);
    handleResize(); 
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [maxWidth]);

  return isMobileView;
};
