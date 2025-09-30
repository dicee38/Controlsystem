import { Router } from "express";
import { getDefects, createDefect } from "../controllers/defectController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authenticate, getDefects);
router.post("/", authenticate, createDefect);

export default router;
