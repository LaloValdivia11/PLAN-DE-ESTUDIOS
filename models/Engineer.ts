import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";

@Table({ tableName: "engineers", timestamps: true })
export class Engineer extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  fullName!: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  age?: number;

  @Column({ type: DataType.STRING, allowNull: true })
  level?: string;
}
