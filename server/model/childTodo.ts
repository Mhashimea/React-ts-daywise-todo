import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Todos from './todos';
import User from './users';

interface TodosI {
  id: number;
  name: string;
  priority: string;
  label: string;
  todoId: number;
  assignedTo: number;
  description: string;
  status: string;
  active: boolean;
}

@Table({
  tableName: 'childTodo',
  timestamps: true
})

export default class ChildTodo extends Model implements TodosI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @AllowNull(false)
  @Column
  name: string

  @AllowNull(true)
  @Column
  priority: string

  @AllowNull(true)
  @Column
  label: string

  @ForeignKey(() => Todos)
  @AllowNull(true)
  @Column
  todoId: number

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  assignedTo: number

  @AllowNull(true)
  @Column
  description: string

  @AllowNull(true)
  @Column
  status: string

  @AllowNull(true)
  @Column
  active: boolean

  @BelongsTo(() => User)
  user: User
}