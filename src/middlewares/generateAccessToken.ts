import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { UserEntity } from "src/db/entities/user.entity";

export const generateAccessToken = (user: Partial<UserEntity>) => {
  return jwt.sign({ ...user }, config.token.secret, {
    expiresIn: "1800s",
  });
};
