import express from "express";

const router = express.Router();

router.get("/add/:productId/:userId");
router.get("/increment/:productId/:userId");
router.get("/decrement/:productId/:userId");
router.delete("/delete/:productId/:userId");

export default router;