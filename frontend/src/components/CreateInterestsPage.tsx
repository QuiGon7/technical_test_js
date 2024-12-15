import React, { useState } from "react";
import IdInput from "./IdInput";
import { handleIdChange } from "@/utils/handleIdChange";
import InterestsSection from "./InterestsSection";
import GenresSection from "./GenresSection";
import { genres } from "@/utils/genres";
import ErrorMessage from "./ErrorMessage";
import { handleSubmitForm } from "@/utils/handleSubmitForm";

const CreateInterestsPage: React.FC = () => {
  const [id, setId] = useState<number | "">("");
  const [preferences, setPreferences] = useState<string[]>([""]);
  const [error, setError] = useState("");

  const availableGenres = genres.filter(
    (genre) => !preferences.includes(genre)
  );

  return (
    <div className="p-2 sm:p-2 w-full max-w-2xl mx-auto bg-gray-100 shadow-lg rounded-lg mt-2">
      <form
        className="p-4"
        onSubmit={(e) =>
          handleSubmitForm(e, id, preferences, setError, setId, setPreferences)
        }
      >
        <h2 className="text-xl font-bold mb-6 text-center text-black">
          Create Recommendations
        </h2>
        <IdInput id={id} onChange={(value) => handleIdChange(value, setId)} />
        <InterestsSection
          preferences={preferences}
          setPreferences={setPreferences}
        />
        <GenresSection
          availableGenres={availableGenres}
          setPreferences={setPreferences}
        />

        {error && <ErrorMessage message={error} />}
        <button
          type="submit"
          className="w-full py-2 text-white bg-green-500 rounded hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateInterestsPage;
