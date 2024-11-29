import { Request, Response } from "express";

import { checkDataUser } from "../utils/checkDataUser";
import { generateAccessToken } from "../middlewares/generateAccessToken";
import {
  createUsersServices,
  editUsersByIdServices,
  deleteUserByIdServices,
  loginUsersServices,
} from "../services/userServices";
import { hashPassword } from "../utils/hashing";

export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { fullName, email, password, dob } = req.body;
    const hashedPassword = hashPassword(password);
    const user = await createUsersServices({
      fullName,
      email,
      password: hashedPassword,
      dob,
    });
    const token = generateAccessToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await loginUsersServices(email, password);
    if (!user) {
      throw new Error("User not found");
    }
    const checkUser = checkDataUser(user);
    const token = generateAccessToken(checkUser);
    res.status(201).json({ user, token });
  } catch (error) {
    let status = 500;
    if ((error.message = "User not found")) {
      status = 403;
    }
    res.status(status).json({ error: error.message });
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const user = req.user;
  try {
    console.log("dededed", user);
    const checkUser = checkDataUser(user);
    res.json(checkUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const user = req.user;
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const user = await editUsersByIdServices(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    await deleteUserByIdServices(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
