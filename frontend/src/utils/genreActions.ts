export const handleAddGenre = (
  genre: string,
  setPreferences: React.Dispatch<React.SetStateAction<string[]>>
) => {
  setPreferences((prev) => {
    const firstEmptyIndex = prev.findIndex((interest) => interest === "");

    if (firstEmptyIndex !== -1) {
      const updatedInterests = [...prev];
      updatedInterests[firstEmptyIndex] = genre;
      return updatedInterests;
    }

    return [...prev, genre];
  });
};
