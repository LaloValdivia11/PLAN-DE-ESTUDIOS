import { Developer } from "../models/Developer.js";
import db from '../db.js';
type DatabaseType = typeof db;
export default class DeveloperStore {
    private readonly database;
    constructor(database: DatabaseType);
    create(engineerId: number, teamId: number, computerId: number): Promise<Developer>;
}
export {};
//# sourceMappingURL=developerStore.d.ts.map