"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageContent from "../components/PageContent";
import PageSelectionButtons from "../components/PageSelectionButtons";
import { PageType } from "@/types/pageTypes";
import { useIsMobileView } from "@/hooks/useIsMobileView";

export default function Home() {
  const [activePage, setActivePage] = useState<PageType>("create");
  const isMobileView = useIsMobileView(768);
  const backgroundColor = activePage === "create" ? "#5bffad" : "#c1ff80";

  return (
    <div style={{ backgroundColor }} className="p-8">
      <div className="flex border border-solid border-gray-300 bg-white p-4 rounded-lg">
        {!isMobileView && (
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
        )}
        <div className="w-full max-w-[500px] mx-auto p-4">
          <div className="">
            <h1 className="text-xl font-bold text-black text-center">
              Welcome to OB technical test
            </h1>
            <p className="mt-4 text-black text-center mb-8">
              Select an option from the left to get started.
            </p>
            {isMobileView && (
              <PageSelectionButtons
                activePage={activePage}
                setActivePage={setActivePage}
              />
            )}
            <PageContent activePage={activePage} />
          </div>
        </div>
      </div>
    </div>
  );
}
