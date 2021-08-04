import { AllowNull, AutoIncrement, Column, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Todos from './todos';

interface AttatchmentsI {
  id: number,
  todoId: number
  location: string
  active: boolean
}

@Table({
  tableName: "attatchments",
  timestamps: true,
})

export default class Attatchments extends Model implements AttatchmentsI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => Todos)
  @AllowNull(false)
  @Column
  todoId: number

  @AllowNull(false)
  @Column
  location: string

  @Default(true)
  @Column
  active: boolean
}