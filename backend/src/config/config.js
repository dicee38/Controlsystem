export default {
  jwtSecret: process.env.JWT_SECRET || "supersecret",
  db: {
    database: process.env.DB_NAME || "systema_db",
    username: process.env.DB_USER || "admin",
    password: process.env.DB_PASS || "secret",
    host: process.env.DB_HOST || "db",
    dialect: "postgres",
  },
};
