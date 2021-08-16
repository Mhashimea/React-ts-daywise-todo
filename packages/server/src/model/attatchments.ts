import { AllowNull, BelongsTo, AutoIncrement, Column, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Comments from './comments';
import Todos from './todos';
import User from './users';
interface AttatchmentsI {
  id: number
  todoId: number
  location: string
  active: boolean
  uploaded: number
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

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  uploaded: number

  @ForeignKey(() => Comments)
  @Column
  commentId: number

  @AllowNull(false)
  @Column
  location: string

  @Default(true)
  @Column
  active: boolean

  @BelongsTo(() => User)
  user: User
}