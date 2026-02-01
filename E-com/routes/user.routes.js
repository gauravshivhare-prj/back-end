const express = require('express');

const router = express.Router();

router.get("/:id");
router.put("/update/:id");
router.patch("/update-single/:id");

module.exports = router;