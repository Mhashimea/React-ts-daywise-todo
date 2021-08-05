import { AllowNull, AutoIncrement, Column, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Todos from './todos';
import User from './users';
interface AttatchmentsI {
  id: number,
  todoId: number
  location: string
  active: boolean
  // uploaded: number
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

  // @ForeignKey(() => User)
  // @AllowNull(false)
  // @Column
  // uploaded: number

  @AllowNull(false)
  @Column
  location: string

  @Default(true)
  @Column
  active: boolean
}