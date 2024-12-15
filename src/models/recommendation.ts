import mongoose, { Document, Schema } from "mongoose";

export interface RecommendationDocument extends Document {
  user_id: string;
  recommendations: string[];
}

const RecommendationSchema: Schema = new Schema({
  user_id: { type: String, required: true },
  recommendations: { type: [String], required: true },
});

export const RecommendationModel = mongoose.model<RecommendationDocument>(
  "Recommendation",
  RecommendationSchema
);
