import { Computer as ComputerModel } from "../models/Computer.js";
export default class ComputerStore {
    database;
    constructor(database) {
        this.database = database;
    }
    create(computer) {
        return ComputerModel.create({ brand: computer.brand,
            serialNumber: computer.serialNumber
        });
    }
}
;
//# sourceMappingURL=computerStore.js.map