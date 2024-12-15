export const addInterestField = (
  preferences: string[],
  setPreferences: React.Dispatch<React.SetStateAction<string[]>>
) => {
  setPreferences([...preferences, ""]);
};

export const removeInterestField = (
  index: number,
  interests: string[],
  setInterests: React.Dispatch<React.SetStateAction<string[]>>
) => {
  if (interests.length > 1) {
    setInterests(interests.filter((_, i) => i !== index));
  }
};

export const handleInterestChange = (
  index: number,
  value: string,
  preferences: string[],
  setPreferences: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const updatedInterests = [...preferences];
  updatedInterests[index] = value;
  setPreferences(updatedInterests);
};
