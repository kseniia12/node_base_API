import * as express from "express";
import * as dotenv from "dotenv"
dotenv.config();
import { AppDataSource } from "./src/db/dataSource";
import allRouter from "./src/routes/allRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allRouter)

AppDataSource.initialize()
  .then(async () => {
    console.log("Connected to db");
  })
  .catch((error) => console.log(error));

app.listen(process.env.PORT, function () {
  console.log("Сервер подключен");
});




