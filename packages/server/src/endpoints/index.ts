import path from 'path'
import multer from 'multer'
import middleware from "../util/middleware"
import login from "./auth/login"
import me from "./auth/me"
import register from "./auth/register"
import addOrUpdateDesignation from './designation/addOrUpdateDesignation'
import getDesignation from './designation/getDesignation'
import addOrUpdateProject from "./projects/addOrUpdateProject"
import getProjects from "./projects/getProjects"
import addOrUpdatesTeam from "./team/addOrUpdatesTeam"
import getTeam from "./team/getTeam"
import addOrUpdateTodo from "./todos/addOrUpdateTodo"
import getTodos from "./todos/getTodos"
import addComment from './todos/addComment'
import getActivities from './activities/getActivities'

const BASEURL = "/api"

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage })

export default app => {
  //auth
  app.post(`${BASEURL}/login`, login)
  app.post(`${BASEURL}/register`, register)
  app.post(`${BASEURL}/me`, me)

  //todos
  app.post(`${BASEURL}/add-todo`, middleware, upload.single("file"), addOrUpdateTodo)
  app.post(`${BASEURL}/todos`, middleware, getTodos)
  app.post(`${BASEURL}/add-comment`, middleware, upload.single("file"), addComment)

  //projecs
  app.post(`${BASEURL}/projects`, getProjects)
  app.post(`${BASEURL}/add-project`, addOrUpdateProject)

  //teams
  app.post(`${BASEURL}/add-team`, addOrUpdatesTeam)
  app.post(`${BASEURL}/teams`, getTeam)

  //designation
  app.post(`${BASEURL}/designation`, middleware, getDesignation)
  app.post(`${BASEURL}/add-designation`, middleware, addOrUpdateDesignation)

  //activites
  app.post(`${BASEURL}/activities`, middleware, getActivities)
}
