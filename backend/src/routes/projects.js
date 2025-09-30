import { Router } from "express";
import {
  getProjects,
  createProject,
} from "../controllers/projectController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authenticate, getProjects);
router.post("/", authenticate, createProject);

export default router;
