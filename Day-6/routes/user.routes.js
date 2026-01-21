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


/*
========================
Day 6 – routes/user.routes.js
========================

Routes ka kaam:
API endpoints ko define karna.

Flow:
Client request -> Route -> Controller -> Response

Step 1: express Router
express.Router() se router object banaya.

Step 2: POST /create
User create karega
Final URL:
POST /api/users/create

Step 3: GET /read
Saare users fetch karega
Final URL:
GET /api/users/read

Step 4: DELETE /delete/:id
User delete karega based on id
Final URL:
DELETE /api/users/delete/<id>

========================
End
========================
*/
