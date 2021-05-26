import path from 'path'
import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  username: 'root',
  password: '',
  database: 'todo',
  host: 'localhost',
  dialect: 'mysql',
  models: [__dirname + '/model']
})