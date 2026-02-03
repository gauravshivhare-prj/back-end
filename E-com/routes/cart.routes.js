import express from "express";
import { addToCartController } from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/add/:productId/:userId", addToCartController);
// router.get("/increment/:productId/:cartId");
// router.get("/decrement/:productId/:cartId");
// router.delete("/delete/:productId/:cartId");

export default router;