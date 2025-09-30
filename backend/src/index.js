import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";
import defectRoutes from "./routes/defects.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/defects", defectRoutes);

app.get("/", (req, res) => res.json({ message: "API работает!" }));

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`🚀 Backend запущен на порту ${PORT}`));
  } catch (err) {
    console.error("Ошибка подключения к БД:", err);
  }
})();
