import { Table, Column, Model, DataType, HasMany, ForeignKey,  BelongsTo} from "sequelize-typescript";
import { Developer } from "./Developer.js";

@Table({ tableName: "teams", timestamps: true })
export class Team extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @HasMany(() => Developer)
  developers!: Developer[];

  
}
