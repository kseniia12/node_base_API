import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { UserEntity } from "src/db/entities/user.entity";

export const generateAccessToken = async (user: Partial<UserEntity>) => {
  return new Promise<string>((res, rej) => {
    jwt.sign(
      { ...user },
      config.token.secret,
      { expiresIn: "1800s" },
      (err, token) => {
        if (err) {
          return rej(err);
        }
        res(token);
      },
    );
  });
};
