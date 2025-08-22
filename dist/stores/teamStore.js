import { Team } from "../models/Team.js";
export default class TeamStore {
    database;
    constructor(database) {
        this.database = database;
    }
    create(name) {
        return Team.create({ name });
    }
}
;
//# sourceMappingURL=teamStore.js.map