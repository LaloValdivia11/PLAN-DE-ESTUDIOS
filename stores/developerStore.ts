import { Developer } from "../models/Developer.js";
import db from '../db.js';

type DatabaseType = typeof db;

export default class DeveloperStore {
  private readonly database: DatabaseType;

  constructor(database: DatabaseType) {
    this.database = database;
  }

  create(engineerId: number, teamId: number, computerId: number) {
    return Developer.create({ engineerId, teamId, computerId})
  }
};
