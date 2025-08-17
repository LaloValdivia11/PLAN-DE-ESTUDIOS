import { Computer } from "../models/Computer.ts";
import db from '../db.ts';

type DatabaseType = typeof db;

export default class ComputerStore  {
  private readonly database: DatabaseType;

  constructor(database: DatabaseType) {
    this.database = database;
  }

  create() {
    // create: (brand: string, model: string, developerId: number) =>
    //   Computer.create({ brand, model, developerId }),
  }
};
