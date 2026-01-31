const express = require("express");
const { getAllImagesController } = require("../controllers/product.controller");
const upload = require("../services/multer.service");

const router = express.Router();

router.post("/images", upload.array("images", 5), getAllImagesController);

module.exports = router;