// users-controller.ts
import { Request, Response } from "express";
import { RecommendationModel } from "../models/recommendation";

export const getUserRecommendations = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;

    const recommendation = await RecommendationModel.findOne({ user_id });

    if (!recommendation) {
      return res.status(404).json({
        error: `No recommendations found for user_id ${user_id}.`,
      });
    }

    return res.json({
      user_id: recommendation.user_id,
      recommendations: recommendation.recommendations,
    });
  } catch (error: any) {
    console.error("Error retrieving recommendations:", error.message);
    return res.status(500).json({
      error: "An error occurred while retrieving recommendations.",
    });
  }
};
