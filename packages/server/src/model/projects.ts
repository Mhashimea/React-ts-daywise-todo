import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript"
import AssignedUser from "./assignedMember"
import Organization from "./organiZation"
import User from "./users"

interface ProjectsI {
  id: number
  organizationId: number
  name: string
  startDate: Date
  teamMember: number
  createdBy: number
  description: string
  status: string
  active: boolean
}

@Table({
  tableName: "projects",
  timestamps: true,
})
export default class Projects extends Model implements ProjectsI {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @ForeignKey(() => Organization)
  @AllowNull(false)
  @Column
  organizationId: number

  @AllowNull(false)
  @Column
  name: string

  @AllowNull(true)
  @Column
  startDate: Date

  @Column
  teamMember: number

  @ForeignKey(() => User)
  @Column
  createdBy: number

  @Column
  description: string

  @AllowNull(false)
  @Column
  status: string

  @AllowNull(false)
  @Column
  active: boolean

  @BelongsTo(() => User)
  user: User

  @BelongsTo(() => Organization)
  organization: Organization

  @HasMany(() => AssignedUser)
  assignedUsers: AssignedUser[]
}
