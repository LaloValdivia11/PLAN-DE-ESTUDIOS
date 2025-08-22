import { Team } from "../models/Team.js";
import db from '../db.js';
type DatabaseType = typeof db;
export default class TeamStore {
    private readonly database;
    constructor(database: DatabaseType);
    create(name: string): Promise<Team>;
}
export {};
//# sourceMappingURL=teamStore.d.ts.map