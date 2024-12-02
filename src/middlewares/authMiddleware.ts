import { UserEntity } from "src/db/entities/user.entity";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { userRepository } from "../repository/userRepository";

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    const userDataToken = jwt.verify(token, config.token.secret) as { id };
    const id = userDataToken.id;
    const userData = await userRepository.findOneBy({ id });
    if (userData) {
      req.user = userData as Partial<UserEntity>;
      next();
    }
  } catch (err) {
    res.status(403).json({ err: err.message });
  }
};
