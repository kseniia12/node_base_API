import { verifyPassword } from "../utils/hashing";
import { userRepository } from "../repository/userRepository";
import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
import { checkDataUser } from "../utils/checkDataUser";
dotenv.config();

export const createUsersServices = async (userData) => {
  console.log(userData);
  const newUser = userRepository.create(userData);
  return await userRepository.save(newUser[0]);
};

export const loginUsersServices = async (email, password) => {
  const user = await userRepository.findOne({ where: { email } });
  if (!user) {
    throw new Error("Пользователь не найден");
  }
  const isValid = verifyPassword(password, user.password);
  if (!isValid) {
    throw new Error("Неверный пароль");
  }
  return user;
};

export const getAllUsersServices = async () => {
  return await userRepository.find();
};

export const getUsersByIdServices = async (id) => {
  return await userRepository.findOneBy({ id });
};

export const editUsersByIdServices = async (id, userData) => {
  await userRepository.update({id}, userData);
  return await userRepository.findOneBy({id});
};

export const deleteUserByIdServices = async (id) => {
  await userRepository.delete(id);
};



// const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
// return { token };