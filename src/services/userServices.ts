import { userRepository } from "../repository/userRepository";

export const createUsersServices = async (userData) => {
  const newUser = userRepository.create({ ...userData });
  return await userRepository.save(newUser);
};

export const loginUsersServices = async (userData) => {
 
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