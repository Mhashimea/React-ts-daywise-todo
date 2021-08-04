import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import createEndPoints from "./endpoints/index"
import { sequelize } from "./options"
import * as dotenv from "dotenv";

const http = require("http")
dotenv.config();

const app = express()
const port = process.env.PORT


//Socket IO
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

io.on("connection", socket => {
  socket.on("todo:update", ({ payload }) => {
    let userIds = payload.project?.assignedUsers?.map(a => a.userId)
    io.emit("emit-todo:update", payload)
  })
})

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  )
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS")
  next()
})

app.get("/", (req, res) => {
  res.send("nodejs done!")
})

createEndPoints(app)

server.listen(port, () => {
  sequelize.authenticate().then(async () => {
    await sequelize.sync()
    console.log("Nodejs Connected on port", port)
  })
})
