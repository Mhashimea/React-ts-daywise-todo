import { AllowNull, AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Organization from '../model/organization'
import User from '../model/users'
import Projects from '../model/Projects'

interface ActivitiesI {
  id: number
  organizationId: number
  text: String
  mentionedUser: number
  projectId: number
  createdBy: number
}

@Table({
  tableName: 'activities',
  timestamps: true
})
export default class Activities extends Model implements ActivitiesI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => Organization)
  @AllowNull(false)
  @Column
  organizationId: number

  @Column
  text: String

  @ForeignKey(() => User)
  @AllowNull(true)
  @Column
  mentionedUser: number

  @ForeignKey(() => Projects)
  @Column
  projectId: number

  @ForeignKey(() => User)
  @AllowNull(true)
  @Column
  createdBy: number
}
