const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://leau:leausdbpassword@localhost:5432/messenger",
  {
    logging: false,
    dialect: "postgres",
  }
);

module.exports = db;
