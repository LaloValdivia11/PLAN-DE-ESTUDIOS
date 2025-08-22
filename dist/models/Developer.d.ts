import { Model } from "sequelize-typescript";
import { Team } from "./Team.js";
import { Engineer } from "./Engineer.js";
import { Computer } from "./Computer.js";
interface DeveloperAttributes {
    engineerId: number;
    teamId?: number | null;
    computerId: number;
}
export declare class Developer extends Model<DeveloperAttributes> {
    engineerId: number;
    teamId: number;
    computerId: number;
    engineer: Engineer;
    team?: Team;
    computer: Computer;
}
export {};
//# sourceMappingURL=Developer.d.ts.map