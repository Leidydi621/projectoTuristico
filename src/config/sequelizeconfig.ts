import { Sequelize } from "sequelize";
import {
  dbDialect,
  dbHost,
  dbName,
  dbPassword,
  dbPort,
  dbUser,
} from "./dotenv";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: Number(dbPort),
  dialect: dbDialect as any,
  storage: ":memory:",
});

export default sequelize;
