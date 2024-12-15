import React, { useState } from "react";
import IdInput from "./IdInput";
import { handleIdChange } from "@/utils/handleIdChange";
import { fetchRecommendations } from "@/utils/api";
import RecommendationsList from "./RecommendationsList";



const RecommendationsPage: React.FC = () => {
  const [id, setId] = useState<number | "">("");
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setRecommendations([]);

    if (id === "") {
      setError("ID is required and must be a number.");
      return;
    }
    try {
      const result = await fetchRecommendations(Number(id));
      setRecommendations(result);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(`No recommendations found for user_id ${id}`)
    }
  };

  return (
    <div className="p-2 sm:p-2 w-full max-w-2xl mx-auto bg-gray-100 shadow-lg rounded-lg mt-2">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6 text-center text-blackk">
          Get Recommendations
        </h2>
        <IdInput id={id} onChange={(value) => handleIdChange(value, setId)} />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {recommendations.length > 0 && (
          <RecommendationsList recommendations={recommendations} />
        )}

        <button
          type="button"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default RecommendationsPage;
