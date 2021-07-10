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
} from "sequelize-typescript"
import Organization from "./organiZation"

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
}
