import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
  getProduct,
} from "../controllers/product.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getProducts);

router.post("/", verifyToken, createProduct);

router.get("/:id", getProduct);

router.put("/:id", verifyToken, updateProduct);

router.delete("/:id", verifyToken, deleteProduct);

export default router;
