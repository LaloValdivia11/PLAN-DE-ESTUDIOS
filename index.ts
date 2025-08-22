import db, { connectDB } from "./db.js";

// stores
import EngineerStore from "./stores/engineerStore.js";
import ComputerStore from "./stores/computerStore.js";
import TeamStore from "./stores/teamStore.js";
import DeveloperStore from "./stores/developerStore.js";

// entities
import Developer from "./entity/Developer.js";
import Engineer from "./entity/Engineer.js";
import Computer from "./entity/Computer.js";
import Team from "./entity/Team.js";

async function main() {
  try {
    await connectDB();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  const engineerEduardo = new Engineer('Eduardo', 24, 'Junio');
  const createEngineer = await new EngineerStore(db).create(engineerEduardo);

  const computerHp = new Computer('2SHDY2KDJ', 'HP')
  const createComputer = await new ComputerStore(db).create(computerHp);

  const developerEduardo = new Developer(
    createEngineer.fullName, createEngineer.age!, createEngineer.level!, createEngineer.id
  );

  const teamTbaco= new Team('TBACO', [developerEduardo]);
  const createTeam = await new TeamStore(db).create(teamTbaco.name);

  const developerTwo = await new DeveloperStore(db).create(
    createEngineer.id, createTeam.id, createComputer.id
  );
 }

main().catch(err => console.error(err));
