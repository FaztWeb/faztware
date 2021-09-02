import { config } from "dotenv";
config();

/* Mongodb */
export const MONGODB_URL = process.env.MONGODB_URL || "";

/* Server */
export const PORT = process.env.PORT || 8080;

/* JWT */
export const JWT_SECRET = process.env.JWT_SECRET || "";

/* Cloudinary */
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
