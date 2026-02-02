import express from "express";

const router = express.Router();

router.get("/:id");
router.put("/update/:id");
router.patch("/update-single/:id");

export default router;