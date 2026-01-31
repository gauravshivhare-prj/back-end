const sendImagesToIK = require("../services/storage.service");

const getAllImagesController = async (req, res) => {
  try {
    let file = req.files;

    if (!file)
      return res.status(404).json({
        message: "Files are required",
      });

    console.log("files->", file);

    // single upload---

    // let singleUpload = await sendImagesToIK(file.buffer, file.originalname);

    // multiple upload---

    let uploadImg = await Promise.all(
      file.map(
        async (elem) => await sendImagesToIK(elem.buffer, elem.originalname)
      )
    );

    

    console.log("image kit upload ->", uploadImg);

    return res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

module.exports = {
  getAllImagesController,
};