// src/routes/recommendations.ts

import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { generateRecommendations } from "../controllers/recommendations-controller";
import { validateRecommendations } from "../utils/schemas";

const router = Router();

router.post("/", validateRecommendations, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return generateRecommendations(req, res);
});

export default router;
