import { Router } from "express";
import {
  getUsers,
  getUser,
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", verifyToken, getUsers);

router.get("/:id", verifyToken, getUser);

export default router;
