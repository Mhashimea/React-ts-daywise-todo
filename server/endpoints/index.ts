import login from './auth/login'
import register from './auth/register'
import addOrUpdateTodo from './todos/addOrUpdateTodo'
import getTodos from './todos/getTodos'

const BASEURL = "/api"

export default ((app) => {
  //auth
  app.post(`${BASEURL}/login`, login)
  app.post(`${BASEURL}/register`, register)

  //todos
  app.post(`${BASEURL}/add-todo`, addOrUpdateTodo)
  app.post(`${BASEURL}/todos`, getTodos)
})