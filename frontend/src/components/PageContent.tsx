import React from "react";
import CreateInterestsPage from "../components/CreateInterestsPage";
import { PageType } from "@/types/pageTypes";
import RecommendationsPage from "./RecommendationsPage";

interface PageContentProps {
  activePage: PageType;
}

const PageContent: React.FC<PageContentProps> = ({ activePage }) => {

  return (
    <div className="w-full flex justify-center">
      {activePage === "create" ? <CreateInterestsPage /> : <RecommendationsPage />}
    </div>
  )
};

export default PageContent;
