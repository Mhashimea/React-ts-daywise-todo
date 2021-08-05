import { Sequelize } from "sequelize-typescript"
import * as dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  username: process.env.DBUSER,
  password: "",
  database: process.env.DBNAME,
  host: "localhost",
  dialect: "mysql",
  models: [__dirname + "/model"],
})
