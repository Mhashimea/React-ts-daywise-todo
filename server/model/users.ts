import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
} from 'sequelize-typescript';

export interface UserI {
  id: number | null;
  fullName: string;
  phone: string;
  email: string;
  password: string;
  avatar: string;
  active: boolean;
}

@Table({
  tableName: 'users',
  timestamps: true,
})
export default class User extends Model implements UserI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  fullName!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  password!: string;

  @AllowNull(true)
  @NotEmpty
  @Column
  phone!: string;

  @AllowNull(true)
  @NotEmpty
  @Column
  avatar!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  active!: boolean;
}
