import { userRepository } from "../repository/userRepository";
export const createUsersServices = async (userData) => {
    const newUser = userRepository.create({ ...userData});
    return await userRepository.save(newUser);
};
