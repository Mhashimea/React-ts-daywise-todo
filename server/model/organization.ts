import { AllowNull, AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import User from './users';

interface OrganizationI {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  avatar: string;
  active: boolean
}

@Table({
  tableName: 'organization',
  timestamps: true
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

  @AllowNull(false)
  @Column
  active: boolean
}