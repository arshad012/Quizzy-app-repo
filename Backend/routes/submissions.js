import { Router } from "express";
import { startAssesment, getAllSubmissions, getSubmissionById, submitAssesment } from "../controllers/index.js";

export const submissionsRouter = Router();

submissionsRouter.post("/", startAssesment);
submissionsRouter.get("/", getAllSubmissions);

submissionsRouter.post("/:id", submitAssesment);
submissionsRouter.get("/:id", getSubmissionById);
