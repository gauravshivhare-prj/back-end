const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, Math.random() * 100 + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;