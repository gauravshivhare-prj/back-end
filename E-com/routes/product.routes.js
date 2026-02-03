import express from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
  updateSingleProductValueController,
} from "../controllers/product.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createProductController);
router.get("/", getAllProductsController);
router.get("/:productId", getSingleProductController);
router.put("/update/:productId", updateProductController);
router.patch("/update-single/:productId", updateSingleProductValueController);
router.delete("/delete/:productId", authMiddleware, deleteProductController);

export default router;