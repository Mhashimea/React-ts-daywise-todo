import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript"

interface OrganizationI {
  id: number
  name: string
  email: string
  phone: string
  address: string
  city: string
  avatar: string
  coverImage: string
  linkedinUrl: string
  twitterUrl: string
  description: string
  active: boolean
}

@Table({
  tableName: "organization",
  timestamps: true,
})
export default class Organization extends Model implements OrganizationI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @Column
  name: string

  @AllowNull(false)
  @Column
  email: string

  @Column
  phone: string

  @Column
  address: string

  @Column
  city: string

  @Column
  avatar: string

  @Column
  coverImage: string

  @Column
  linkedinUrl: string

  @Column
  twitterUrl: string

  @Column
  description: string

  @AllowNull(false)
  @Column
  active: boolean
}
