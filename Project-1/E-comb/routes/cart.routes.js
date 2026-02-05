import express from "express";
import {
  addToCartController,
  decrementController,
  deleteProductFromCartController,
  incrementController,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/add/:productId/:userId", addToCartController);
router.get("/increment/:productId/:cartId", incrementController);
router.get("/decrement/:productId/:cartId", decrementController);
router.delete("/delete/:productId/:cartId", deleteProductFromCartController);

export default router;