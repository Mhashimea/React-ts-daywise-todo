import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, AllowNull, BelongsTo } from 'sequelize-typescript';
import User from '../model/users'
import Organization from './organization';

interface DesignationI {
  id: number
  organizationId: number
  name: string
  createdBy: number
  description: string
  active: boolean
}

@Table({
  tableName: 'designation',
  timestamps: true
})

export default class Designation extends Model implements DesignationI {
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

  @ForeignKey(() => User)
  @Column
  createdBy: number

  @Column
  description: string

  @AllowNull(false)
  @Column
  active: boolean

  @BelongsTo(() => Organization)
  organization: Organization
}