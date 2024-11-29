import { UserEntity } from "src/db/entities/user.entity";
import * as jwt from "jsonwebtoken";

export const generateAccessToken = (user: Partial<UserEntity>) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
};
