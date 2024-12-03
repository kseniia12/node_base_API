import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { userRepository } from "../repository/userRepository";

async function authenticateToken(req, res, next): Promise<void> {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, config.token.secret, async (err: any, payload: any) => {
    if (err) {
      res.sendStatus(403);
      return;
    }
    const userId = payload?.id;
    if (!userId || isNaN(userId)) {
      res.status(403).send("Invalid token payload");
      return;
    }
    try {
      const userData = await userRepository.findOneBy({ id: userId });
      if (!userData) {
        res.status(404).send("User not found");
        return;
      }
      req.user = userData;
      next();
    } catch (err) {
      res.status(403).json({ err: err.message });
    }
  });
}
export default authenticateToken;
