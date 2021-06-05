import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Organization from './organiZation';
import Projects from './projects';
import User from './users';

interface AssignedUsersI {
  id: number;
  organizationId: number;
  userId: number;
  projectId: number;
  assignedBy: number
}

@Table({
  tableName: 'assignedUsers',
  timestamps: true
})

export default class AssignedUser extends Model implements AssignedUsersI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => Organization)
  @AllowNull(false)
  @Column
  organizationId: number

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @AllowNull(false)
  @ForeignKey(() => Projects)
  @Column
  projectId: number

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  assignedBy: number

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Organization)
  organization: Organization;
}