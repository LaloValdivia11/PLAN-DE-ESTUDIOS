import { Engineer as EngineerModel } from "../models/Engineer.js";
export default class EngineerStore {
    database;
    constructor(database) {
        this.database = database;
    }
    async create(engineer) {
        return await EngineerModel.create({
            fullName: engineer.fullName,
            age: engineer.age,
            level: engineer.level
        });
    }
}
;
//# sourceMappingURL=engineerStore.js.map