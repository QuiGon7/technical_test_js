export const handleIdChange = (
  value: string,
  setId: React.Dispatch<React.SetStateAction<number | "">>
) => {
  const parsedValue = parseInt(value, 10);
  if (!isNaN(parsedValue) || value === "") {
    setId(value === "" ? "" : parsedValue);
  }
};
