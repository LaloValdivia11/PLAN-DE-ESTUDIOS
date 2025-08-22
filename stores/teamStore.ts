import { Team } from "../models/Team.js";
import db from '../db.js';
import Developer from "../entity/Developer.js";

type DatabaseType = typeof db;

export default class TeamStore {
  private readonly database: DatabaseType;

  constructor(database: DatabaseType) {
    this.database = database;
  }

  create(name: string) {
    return Team.create({ name })
  }
};
