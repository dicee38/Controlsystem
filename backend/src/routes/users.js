import express from "express";
const router = express.Router();

// пример — список пользователей
router.get("/", (req, res) => {
  res.json({ message: "GET all users" });
});

export default router;
