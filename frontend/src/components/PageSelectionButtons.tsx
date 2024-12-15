import { useIsMobileView } from "@/hooks/useIsMobileView";
import React from "react";

interface PageSelectionButtonsProps {
  activePage: string;
  setActivePage: (page: "create" | "get") => void;
}

const PageSelectionButtons: React.FC<PageSelectionButtonsProps> = ({
  activePage,
  setActivePage,
}) => {

    const isMobileView = useIsMobileView(768);
    const buttonWidth = isMobileView ? "w-3/4" : "w-full";

  return (
    <div className="flex flex-col  justify-center items-center w-full">
      <button
        className={`${buttonWidth} py-2 mb-2 rounded transition duration-300 shadow-lg ${
          activePage === "create"
            ? "bg-blue-500 text-white"
            : "bg-white text-black hover:bg-blue-400 hover:text-white"
        }`}
        onClick={() => setActivePage("create")}
      >
        Create Recommendations
      </button>
      <button
        className={`${buttonWidth} py-2 rounded transition duration-300 shadow-lg ${
          activePage === "get"
            ? "bg-red-500 text-white"
            : "bg-white text-black hover:bg-red-400 hover:text-white"
        }`}
        onClick={() => setActivePage("get")}
      >
        Get Recommendations
      </button>
    </div>
  );
};

export default PageSelectionButtons;
