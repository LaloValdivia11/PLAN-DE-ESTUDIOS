import { Engineer } from "../models/Engineer.ts";
import db from '../db.ts';

type DatabaseType = typeof db;

export default class EngineerStore {
  private readonly database: DatabaseType;

  constructor(database: DatabaseType) {
    this.database = database;
  }

  create(name: string, age: number, level: string){
    Engineer.create({name, age,level })
  }
};
