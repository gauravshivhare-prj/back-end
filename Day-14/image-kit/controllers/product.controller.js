const getAllImagesController = async (req, res) => {
  try {
    let file = req.files;
    console.log(file);

    if (!file)
      return res.status(404).json({
        message: "Files are required",
      });

    // let fileUrl = `http://localhost:3000/${file.path}`;

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