import { createUsersServices } from "../services/userServices";

export const createUser =  async (req, res) => {
    try {
      const user = await createUsersServices(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
