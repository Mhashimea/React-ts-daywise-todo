import middleware from '../util/middleware'
import login from './auth/login'
import me from './auth/me'
import register from './auth/register'
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
})