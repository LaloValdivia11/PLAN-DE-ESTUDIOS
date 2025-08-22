import { Engineer as EngineerModel } from "../models/Engineer.js";
import Engineer from "../entity/Engineer.js";
import db from '../db.js';
type DatabaseType = typeof db;
export default class EngineerStore {
    private readonly database;
    constructor(database: DatabaseType);
    create(engineer: Engineer): Promise<EngineerModel>;
}
export {};
//# sourceMappingURL=engineerStore.d.ts.map