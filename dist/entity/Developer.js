import Engineer from "./Engineer.js";
export default class Developer extends Engineer {
    id;
    team;
    constructor(fullName, age, level, id) {
        super(fullName, age, level);
        this.id = id;
    }
}
//# sourceMappingURL=Developer.js.map