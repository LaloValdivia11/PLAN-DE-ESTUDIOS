var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType } from "sequelize-typescript";
let Engineer = class Engineer extends Model {
    fullName;
    age;
    level;
};
__decorate([
    Column({ type: DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Engineer.prototype, "fullName", void 0);
__decorate([
    Column({ type: DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Engineer.prototype, "age", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Engineer.prototype, "level", void 0);
Engineer = __decorate([
    Table({ tableName: "engineers", timestamps: true })
], Engineer);
export { Engineer };
//# sourceMappingURL=Engineer.js.map