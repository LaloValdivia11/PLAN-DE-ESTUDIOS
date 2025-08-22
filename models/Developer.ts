// Developer.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Team } from "./Team.js";
import { Engineer } from "./Engineer.js";
import { Computer } from "./Computer.js";

interface DeveloperAttributes {
  engineerId: number;
  teamId?: number | null;
  computerId: number;
}

@Table({ tableName: "developers", timestamps: true })
export class Developer extends Model<DeveloperAttributes> {
  @ForeignKey(() => Engineer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  engineerId!: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER, allowNull: false })
  teamId!: number;

  @ForeignKey(() => Computer)
  @Column({ type: DataType.INTEGER, allowNull: true })
  computerId!: number;

  @BelongsTo(() => Engineer)
  engineer!: Engineer;

  @BelongsTo(() => Team)
  team?: Team;

  @BelongsTo(() => Computer)
  computer!: Computer;
}
