import jwt from "jsonwebtoken";
import config from "../config/config.js";

export function authenticate(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Нет токена" });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Неверный токен" });
  }
}
