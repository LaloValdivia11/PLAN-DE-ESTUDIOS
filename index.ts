import "reflect-metadata";
import connectDB from './db.ts';

// store
import ComputerStore from './stores/computerStore.ts';
import DeveloperStore from './stores/developerStore.ts';
import EngineerStore from "./stores/engineerStore.ts";
import TeamStore from './stores/teamStore.ts';

// entities
import Cola from './entity/Cola.ts';
import Developer from "./entity/Developer.ts";
import Engineer from "./entity/Engineer.ts";
import Team from "./Team.ts";

import db from './db.ts';

async function main() {
  try {
    await connectDB.authenticate();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

    const engineerStore = new EngineerStore(db);
    const engineerOne = engineerStore.create('Eduardo', 24, 'junior');
}
  
  main().catch(err => console.error(err));