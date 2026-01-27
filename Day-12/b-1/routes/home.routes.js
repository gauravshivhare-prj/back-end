const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  console.log(req.user);
  return res.status(200).json({
    success: true,
    message: "User loggedin",
    user: req.user,
  });
});

module.exports = router;