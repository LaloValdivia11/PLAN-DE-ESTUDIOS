import { Team } from "../models/Team.ts";
import db from '../db.ts';

type DatabaseType = typeof db;

export default class TeamStore {
  private readonly database: DatabaseType;

  constructor(database: DatabaseType) {
    this.database = database;
  }

  create() {
    //create: (name: string) => Team.create({ name }),
  }
};
