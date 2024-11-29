import { UserEntity } from "src/db/entities/user.entity";
import * as jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    async (err: any, userData: Partial<UserEntity>) => {
      if (err) return res.sendStatus(403);
      req.user = userData;
      next();
    },
  );
};
