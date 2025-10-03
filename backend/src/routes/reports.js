import express from "express";
const router = express.Router();

// пример — отчёт
router.get("/", (req, res) => {
  res.json({ message: "GET reports" });
});

export default router;
