import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
  getProduct,
} from "../controllers/product.controller";
const router = Router();

router.get("/products", getProducts);

router.post("/products", createProduct);

router.get("/products/:id", getProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;
