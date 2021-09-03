import { Router } from "express";
import { profile, login, register } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.post("/login", login);

router.post("/register", register);

router.get("/profile", verifyToken, profile);

export default router;
