import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany
  } from "sequelize-typescript";
  
  @Table({ tableName: "developers", timestamps: true })
  export class Developer extends Model {
    @Column({ type: DataType.STRING, allowNull: false })
    fullName!: string;
  
    @Column({ type: DataType.INTEGER, allowNull: false })
    age!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    level!: string;
  }
  