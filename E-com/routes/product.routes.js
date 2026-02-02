import express from "express";
import { createProductController } from "../controllers/product.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/create", authMiddleware, createProductController);
router.get("/");
router.get("/:productId");
router.put("/update/:productId");
router.patch("/update-single/:productId");
router.delete("/delete/:productId");

export default router;