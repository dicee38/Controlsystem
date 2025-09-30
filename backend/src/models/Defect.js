import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Project from "./Project.js";
import User from "./User.js";

const Defect = sequelize.define("Defect", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: {
    type: DataTypes.ENUM("new", "in_progress", "review", "closed"),
    defaultValue: "new",
  },
  priority: {
    type: DataTypes.ENUM("low", "medium", "high"),
    defaultValue: "medium",
  },
});

Project.hasMany(Defect);
Defect.belongsTo(Project);

User.hasMany(Defect, { as: "AssignedDefects", foreignKey: "assigneeId" });
Defect.belongsTo(User, { as: "Assignee", foreignKey: "assigneeId" });

export default Defect;
