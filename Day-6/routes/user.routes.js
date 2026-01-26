import express from "express";
import {
  createController,
  deleteUserController,
  getAllUserController,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/create", createController);
router.get("/read", getAllUserController);
router.delete("/delete/:id", deleteUserController);

export default router;

