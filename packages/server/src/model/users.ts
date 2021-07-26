import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript"
import AssignedUser from './assignedMember'
import Designation from './designation'
import Organization from "./organiZation"
import Projects from './projects'

export interface UserI {
  id: number | null
  organizationId: number
  fullName: string
  phone: string
  email: string
  password: string
  isAdmin: boolean
  avatar: string
  active: boolean
}

@Table({
  tableName: "users",
  timestamps: true,
})
export default class User extends Model implements UserI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => Organization)
  @AllowNull(false)
  @Column
  organizationId: number

  @ForeignKey(() => Designation)
  @AllowNull(true)
  @Column
  designationId: number

  @AllowNull(false)
  @NotEmpty
  @Column
  fullName!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  email!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  password!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  isAdmin!: boolean

  @AllowNull(true)
  @NotEmpty
  @Column
  phone!: string

  @AllowNull(true)
  @NotEmpty
  @Column
  avatar!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  active!: boolean

  @BelongsTo(() => Organization)
  organization: Organization

  @BelongsTo(() => Designation)
  designation: Designation

  @HasMany(() => AssignedUser)
  assignedProjects: AssignedUser[]
}
