export const fetchRecommendations = async (
  userid: number
): Promise<string[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${userid}/recommendations`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`No recommendations found for user_id ${userid}`);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.recommendations)) {
      throw new Error("Invalid response format");
    }

    return data.recommendations;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error;
  }
};

export const createRecommendations = async (data: {
  id: number | "";
  preferences: string[];
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recommendations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: String(data.id),
          preferences: data.preferences,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to create recommendations. Status: ${response.status}`
      );
    }

    const result = await response.json();
    console.log("Recommendations created successfully:", result);
    alert("Recommendations created successfully!");
  } catch (error) {
    console.error("Error creating recommendations:", error);
    alert("Failed to create recommendations. Please try again.");
  }
};
