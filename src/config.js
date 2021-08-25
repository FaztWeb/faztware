import { config } from "dotenv";
config();

export const MONGODB_URL = process.env.MONGODB_URL || "";
export const PORT = process.env.PORT || 4000;
export const JWT_SECRET = process.env.JWT_SECRET || "";
