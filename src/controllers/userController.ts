import { checkDataUser } from "../utils/checkDataUser";
import { generateAccessToken } from "../middlewares/generateAccessToken";
import { createUsersServices, getAllUsersServices, getUsersByIdServices, editUsersByIdServices, deleteUserByIdServices, loginUsersServices } from "../services/userServices";
import {hashPassword} from "../utils/hashing"
const jwt = require('jsonwebtoken');

export const createUser =  async (req, res) => {
    try {
      const {fullName, email, password, dob} = req.body
      const hashedPassword = hashPassword(password); 
      const user = await createUsersServices({ fullName, email, password: hashedPassword, dob });
      if (!user){
        throw new Error ("Не получилось зарегестрироваться")
      }
      const token = generateAccessToken({ username: req.body.username });
      console.log("token", token)

      res.status(201).json({user, token});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

export const loginUser =  async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await loginUsersServices(email, password);
    if (!user){
      throw new Error ("Не получилось авторизоваться")
    }
    const token = generateAccessToken({ username: req.body.username });
    const checkUser = checkDataUser(user)
    res.status(201).json({user, token});
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
