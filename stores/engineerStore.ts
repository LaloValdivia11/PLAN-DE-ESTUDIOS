import { Engineer as EngineerModel } from "../models/Engineer.js";
import Engineer from "../entity/Engineer.js";
import db from '../db.js';

type DatabaseType = typeof db;

export default class EngineerStore {
  private readonly database: DatabaseType;

  constructor(database: DatabaseType) {
    this.database = database;
  }

  async create(engineer: Engineer) {
    return await EngineerModel.create({
      fullName: engineer.fullName,
      age: engineer.age,
      level: engineer.level
    });
  }
  
};
