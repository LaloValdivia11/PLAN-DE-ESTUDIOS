var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Developer } from "./Developer.js";
let Team = class Team extends Model {
    name;
    developers;
};
__decorate([
    Column({ type: DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Team.prototype, "name", void 0);
__decorate([
    HasMany(() => Developer),
    __metadata("design:type", Array)
], Team.prototype, "developers", void 0);
Team = __decorate([
    Table({ tableName: "teams", timestamps: true })
], Team);
export { Team };
//# sourceMappingURL=Team.js.map