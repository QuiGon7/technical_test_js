import React from "react";

interface RecommendationsListProps {
  recommendations: string[];
}

const RecommendationsList: React.FC<RecommendationsListProps> = ({ recommendations }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2 text-black">
        Interests:
      </label>
      <div className="grid grid-cols-1 gap-2">
        {recommendations.map((recommendations, index) => (
          <div
            key={index}
            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-800"
          >
            {recommendations}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
