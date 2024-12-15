import React from "react";
import PageSelectionButtons from "./PageSelectionButtons";

interface SidebarProps {
  activePage: string;
  setActivePage: (page: "create" | "get") => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="w-1/4 h-[100vh] bg-gray-100 flex flex-col items-center rounded-lg p-2 ">
      <h2 className="text-lg font-bold mb-4 text-black">OB technical test</h2>
      <PageSelectionButtons
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
};

export default Sidebar;
