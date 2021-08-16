import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript"
import Attatchments from './attatchments'
import ChildTodo from "./childTodo"
import Comments from './comments'
import Organization from "./organiZation"
import Projects from "./projects"
import User from "./users"

interface TodosI {
  id: number
  organizationId: number
  name: string
  date: Date
  priority: string
  label: string
  projectId: number
  assignedTo: number
  description: string
  status: string
  active: boolean
}

@Table({
  tableName: "todos",
  timestamps: true,
})
export default class Todos extends Model implements TodosI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => Organization)
  @AllowNull(false)
  @Column
  organizationId: number

  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Default(new Date())
  @Column
  date: Date

  @AllowNull(true)
  @Column
  priority: string

  @AllowNull(true)
  @Column
  label: string

  @ForeignKey(() => Projects)
  @AllowNull(true)
  @Column
  projectId: number

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

  @BelongsTo(() => Organization)
  organization: Organization

  @BelongsTo(() => Projects)
  project: Projects

  @HasMany(() => ChildTodo)
  childTodo: ChildTodo[]

  @HasMany(() => Attatchments)
  attachments: Attatchments[]

  @HasMany(() => Comments)
  comments: Comments[]
}
