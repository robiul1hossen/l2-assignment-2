import express from "express";
import { UserController } from "./users.controller";

const router = express.Router();
router.post("/create-user", UserController.createUser);

router.get("/", UserController.getAllUser);

router.get("/:userId", UserController.getSingleUser);

export const UserRoutes = router;
