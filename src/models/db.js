const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  database: "shortlinks",
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
});

const URLs = db.define("urls", {
  id: {
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  code: {
    type: DataTypes.STRING(7),
    unique: true,
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = {
  db,
  URLs,
};
