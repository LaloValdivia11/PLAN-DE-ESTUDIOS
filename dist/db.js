import "reflect-metadata";
import { Sequelize } from "sequelize-typescript";
import { Developer } from "./models/Developer.js";
import { Engineer } from "./models/Engineer.js";
import { Team } from "./models/Team.js";
import { Computer } from "./models/Computer.js";
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
    await sequelize.sync({ alter: true });
}
//# sourceMappingURL=db.js.map