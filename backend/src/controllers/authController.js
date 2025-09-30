import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
import config from "../config/config.js";

export async function register(req, res) {
  try {
    const { username, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash, role });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ error: "Неверные данные" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Неверные данные" });

    const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
