var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Developer.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Team } from "./Team.js";
import { Engineer } from "./Engineer.js";
import { Computer } from "./Computer.js";
let Developer = class Developer extends Model {
    engineerId;
    teamId;
    computerId;
    engineer;
    team;
    computer;
};
__decorate([
    ForeignKey(() => Engineer),
    Column({ type: DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Developer.prototype, "engineerId", void 0);
__decorate([
    ForeignKey(() => Team),
    Column({ type: DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Developer.prototype, "teamId", void 0);
__decorate([
    ForeignKey(() => Computer),
    Column({ type: DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Developer.prototype, "computerId", void 0);
__decorate([
    BelongsTo(() => Engineer),
    __metadata("design:type", Engineer)
], Developer.prototype, "engineer", void 0);
__decorate([
    BelongsTo(() => Team),
    __metadata("design:type", Team)
], Developer.prototype, "team", void 0);
__decorate([
    BelongsTo(() => Computer),
    __metadata("design:type", Computer)
], Developer.prototype, "computer", void 0);
Developer = __decorate([
    Table({ tableName: "developers", timestamps: true })
], Developer);
export { Developer };
//# sourceMappingURL=Developer.js.map