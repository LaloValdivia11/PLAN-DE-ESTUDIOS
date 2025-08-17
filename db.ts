import "reflect-metadata";
import { Sequelize } from "sequelize-typescript";
import { Developer } from "./models/Developer.ts";
import { Engineer } from "./models/Engineer.ts";
import { Team } from "./models/Team.ts";
import { Computer } from "./models/Computer.ts";

const sequelize = new Sequelize({
  database: "100L",
  username: "postgres",  
  password: "",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  models: [Developer, Engineer, Team, Computer],
  logging: false
});

export default sequelize;

export async function connectDB() {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
}
