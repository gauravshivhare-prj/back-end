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


/*
========================
Day 7 – routes/user.routes.js
========================

Routes ka kaam:
Client ke URL endpoint ko controller se connect karna.

Step 1: Express Router
router = express.Router()

Step 2: Register route
POST /register
Final URL:
POST /api/users/register

Step 3: Get all users route
GET /
Final URL:
GET /api/users/

Step 4: Get single user route
GET /:id
Final URL:
GET /api/users/<id>

Step 5: Update user route
PUT /update/:id
Final URL:
PUT /api/users/update/<id>

Step 6: Delete user route
DELETE /delete/:id
Final URL:
DELETE /api/users/delete/<id>

========================
End
========================
*/