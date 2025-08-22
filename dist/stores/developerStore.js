import { Developer } from "../models/Developer.js";
export default class DeveloperStore {
    database;
    constructor(database) {
        this.database = database;
    }
    create(engineerId, teamId, computerId) {
        return Developer.create({ engineerId, teamId, computerId });
    }
}
;
//# sourceMappingURL=developerStore.js.map