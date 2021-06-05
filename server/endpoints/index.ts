import middleware from '../util/middleware'
import login from './auth/login'
import me from './auth/me'
import register from './auth/register'
import addOrUpdateProject from './projects/addOrUpdateProject'
import getProjects from './projects/getProjects'
import addOrUpdatesTeam from './team/addOrUpdatesTeam'
import getTeam from './team/getTeam'
import addOrUpdateTodo from './todos/addOrUpdateTodo'
import getTodos from './todos/getTodos'

const BASEURL = "/api"

export default ((app) => {
  //auth
  app.post(`${BASEURL}/login`, login)
  app.post(`${BASEURL}/register`, register)
  app.post(`${BASEURL}/me`, me)

  //todos
  app.post(`${BASEURL}/add-todo`, middleware, addOrUpdateTodo)
  app.post(`${BASEURL}/todos`, middleware, getTodos)

  //projecs
  app.post(`${BASEURL}/projects`, getProjects)
  app.post(`${BASEURL}/add-project`, addOrUpdateProject)

  //teams
  app.post(`${BASEURL}/add-team`, addOrUpdatesTeam)
  app.post(`${BASEURL}/teams`, getTeam)
})