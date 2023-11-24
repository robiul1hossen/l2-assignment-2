import { User } from "./users.interface";
import { UserModel } from "./users.model";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
};
