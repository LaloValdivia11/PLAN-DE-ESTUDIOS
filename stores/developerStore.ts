import { Developer } from "../models/Developer.ts";
import db from '../db.ts';

type DatabaseType = typeof db;

export default class DeveloperStore {
  private readonly database: DatabaseType;

  constructor(database: DatabaseType) {
    this.database = database;
  }

  create() {
    // create: (name: string, age: number, teamId?: number, engineerId?: number) =>
    //   Developer.create({ name, age, teamId, engineerId }),
  }
};
