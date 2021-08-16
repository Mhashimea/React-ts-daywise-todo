import { Model, AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Length, PrimaryKey, Table } from 'sequelize-typescript';
import User from './users'
import Attatchments from './Attatchments'
import Todos from './todos'

interface CommentsI {
  id: number
  text: string
  uploadedBy: number
  todoId: number
  active: boolean
}

@Table({
  tableName: 'comments',
  timestamps: true
})

export default class Comments extends Model implements CommentsI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @Length({ min: 3, max: 250 })
  @AllowNull(false)
  @Column
  text: string

  @ForeignKey(() => User)
  @Column
  uploadedBy: number

  @ForeignKey(() => Todos)
  @Column
  todoId: number

  @Column
  active: boolean

  @BelongsTo(() => User)
  uploaded: User

  @HasMany(() => Attatchments)
  attatchments: Attatchments[]
}