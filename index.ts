import * as express from "express";
import { AppDataSource } from "./src/db/dataSource";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize()
  .then(async () => {
    console.log("Connected to db");
  })
  .catch((error) => console.log(error));

app.listen(3000, function () {
  console.log("Сервер одключен");
});




