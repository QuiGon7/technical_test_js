import React from "react";
import { handleAddGenre } from "@/utils/genreActions";

interface GenresSectionProps {
  availableGenres: string[];
  setPreferences: React.Dispatch<React.SetStateAction<string[]>>;
}

const GenresSection: React.FC<GenresSectionProps> = ({ availableGenres, setPreferences }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2 text-black">
        Available Genres:
      </label>
      <div className="flex gap-2 flex-wrap">
        {availableGenres.map((genre, index) => (
          <button
            key={index}
            type="button"
            className="px-2 py-1 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => handleAddGenre(genre, setPreferences)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenresSection;
