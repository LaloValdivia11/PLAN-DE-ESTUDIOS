import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Developer } from "./Developer.ts";

@Table({ tableName: "teams", timestamps: true })
export class Team extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @HasMany(() => Developer)
  developers!: Developer[];
}
