import { createRecommendations } from "@/utils/api";

export const handleSubmitForm = (
  e: React.FormEvent,
  id: number | "",
  preferences: string[],
  setError: React.Dispatch<React.SetStateAction<string>>,
  setId: React.Dispatch<React.SetStateAction<number | "">>,
  setPreferences: React.Dispatch<React.SetStateAction<string[]>>
) => {
  e.preventDefault();
  setError("");

  if (id === "") {
    setError("ID is required and must be a number.");
    return;
  }

  createRecommendations({ id, preferences });
  setId("");
  setPreferences([""]);
};
