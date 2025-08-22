import { Table, Column, Model, DataType, HasOne } from "sequelize-typescript";

@Table({ tableName: "computers", timestamps: true })
export class Computer extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  brand!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  serialNumber!: string;
}
