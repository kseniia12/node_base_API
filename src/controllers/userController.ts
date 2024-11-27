import { createUsersServices, getAllUsersServices, getUsersByIdServices, editUsersByIdServices, deleteUserByIdServices, loginUsersServices } from "../services/userServices";

export const createUser =  async (req, res) => {
    try {
      const user = await createUsersServices(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

export const loginUser =  async (req, res) => {
  try {
    const user = await loginUsersServices(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllUsers =  async (req, res) => {
  try {
    const users = await getAllUsersServices();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById =  async (req, res) => {
  try {
    const user = await getUsersByIdServices(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editUserById =  async (req, res) => {
  try {
    const user = await editUsersByIdServices(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    await deleteUserByIdServices(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
