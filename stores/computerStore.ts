import { Computer as ComputerModel} from "../models/Computer.js";
import Computer from "../entity/Computer.js";
import db from '../db.js';

type DatabaseType = typeof db;

export default class ComputerStore  {
  private readonly database: DatabaseType;

  constructor(database: DatabaseType) {
    this.database = database;
  }

  create(computer: Computer) {
    return ComputerModel.create(
      { brand: computer.brand,
        serialNumber: computer.serialNumber
      }
    )
  }
};
