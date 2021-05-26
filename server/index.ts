import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { sequelize } from './options'


const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("nodejs done!");
});
app.listen(port, () => {
  sequelize.authenticate().then(async () => {
    await sequelize.sync()
    console.log("Nodejs Connected on port", port)
  })
})
