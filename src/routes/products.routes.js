import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
  getProduct,
  getProductsStats,
  getProductsStatsOutStock
} from "../controllers/product.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.get("/products", getProducts);
router.get("/products/stats", getProductsStats);
router.get("/products/stats-out-stock", getProductsStatsOutStock);
router.post("/products", verifyToken, createProduct);

router.get("/products/:id", getProduct);

router.put("/products/:id", verifyToken, updateProduct);

router.delete("/products/:id", verifyToken, deleteProduct);

export default router;
