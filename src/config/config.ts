import * as dotenv from "dotenv";
dotenv.config();
const config = {
  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  server: {
    port: Number(process.env.PORT),
  },
  token: {
    secret: process.env.TOKEN_SECRET,
  },
};

export default config;
