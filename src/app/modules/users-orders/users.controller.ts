import { Request, Response } from "express";
import { UserService } from "./users.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    const result = await UserService.createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: "User is created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: "Users are retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserService.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "User is retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
};
