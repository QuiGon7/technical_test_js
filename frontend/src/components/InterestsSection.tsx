import React from "react";
import CreateInterestField from "./CreateInterestField";
import {
  handleInterestChange,
  removeInterestField,
  addInterestField,
} from "@/utils/interestsActions";

interface InterestsSectionProps {
  preferences: string[];
  setPreferences: React.Dispatch<React.SetStateAction<string[]>>;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({
  preferences,
  setPreferences,
}) => {
  const handleInterestChangeHandler = (index: number, value: string) => {
    handleInterestChange(index, value, preferences, setPreferences);
  };

  const handleRemoveInterest = (index: number) => {
    removeInterestField(index, preferences, setPreferences);
  };

  const handleAddInterest = () => {
    addInterestField(preferences, setPreferences);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2 text-black">
        Interests:
      </label>
      {preferences.map((interest, index) => (
        <CreateInterestField
          key={index}
          value={interest}
          onChange={(value) => handleInterestChangeHandler(index, value)}
          onRemove={index > 0 ? () => handleRemoveInterest(index) : undefined}
          isRequired={index === 0}
        />
      ))}
      <button
        type="button"
        className="px-3 py-2 mt-2 text-white bg-green-500 rounded hover:bg-green-600 transition"
        onClick={handleAddInterest}
      >
        +
      </button>
    </div>
  );
};

export default InterestsSection;
