// recommendations-controller.ts

import axios from "axios";
import { Request, Response } from "express";
import { RecommendationModel } from "../models/recommendation";
import {
  GenerateRecommendationsResponse,
  RecommendationsRequest,
} from "../utils/schemas";

export const generateRecommendations = async (req: Request, res: Response) => {
  const { user_id, preferences }: RecommendationsRequest = req.body;
  try {
    const recommendationForUser = await RecommendationModel.findOne({
      user_id,
    });
    if (recommendationForUser) {
      return res.status(400).json({
        error: "Recommendations already generated for this user",
      });
    }

    let { data }: GenerateRecommendationsResponse = await axios.post(
      `${process.env.WIREMOCK_URL}/llm/generate`,
      {
        preferences,
      }
    );

    const recommendationDocument = {
      user_id,
      recommendations: data.recommendations,
    };

    const recommendationObject = new RecommendationModel(
      recommendationDocument
    );
    await recommendationObject.save();

    return res.json(recommendationDocument);
  } catch (error) {
    console.error("Error generating recommendations:", error);
    return res.status(500).json({
      error:
        "Unable to generate recommendations at this time. Please try again later.",
    });
  }
};
