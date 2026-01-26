const express = require("express");
const {
  registerController,
  getAllUserController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/user.controllers");

const router = express.Router();

router.post("/register", registerController);
router.get("/", getAllUserController);
router.get("/:id", getSingleUserController);
router.put("/update/:id", updateUserController);
router.delete("/delete/:id", deleteUserController);

module.exports = router;

