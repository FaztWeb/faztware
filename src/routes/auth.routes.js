import { Router } from "express";
import { profile, login, register } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.post("/auth/login", login);

router.post("/auth/register", register);

router.get("/auth/profile", verifyToken, profile);

export default router;
