const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  console.log(req.user);
  return res.send("i m home.....");
});

module.exports = router;