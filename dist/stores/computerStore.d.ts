import { Computer as ComputerModel } from "../models/Computer.js";
import Computer from "../entity/Computer.js";
import db from '../db.js';
type DatabaseType = typeof db;
export default class ComputerStore {
    private readonly database;
    constructor(database: DatabaseType);
    create(computer: Computer): Promise<ComputerModel>;
}
export {};
//# sourceMappingURL=computerStore.d.ts.map