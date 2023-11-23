import { Request, Response } from "express";
import { UserService } from "./users.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
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

export const UserController = {
  createUser,
};
