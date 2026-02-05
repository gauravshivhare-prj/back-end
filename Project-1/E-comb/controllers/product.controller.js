import { ProductModel } from "../models/product.model.js";
import { UserModel } from "../models/user.model.js";
import { sendToIK } from "../services/storage.service.js";

export const createProductController = async (req, res) => {
  try {
    if (!req.files)
      return res.status(404).json({
        message: "Images are required",
      });

    let { productName, description, amount, currency } = req.body;

    if (!productName || !description || !amount)
      return res.status(400).json({
        message: "All fields are required",
      });

    let imagesArr = await Promise.all(
      req.files.map(
        async (elem) => await sendToIK(elem.buffer, elem.originalname)
      )
    );

    let newProduct = await ProductModel.create({
      productName,
      description,
      price: {
        amount,
        currency,
      },
      images: imagesArr.map((elem) => elem.url),
    });

    // let user = await UserModel.findById(req.user._id);
    // user.products.push(newProduct._id);
    // await user.save();

    await UserModel.findByIdAndUpdate(
      req.user._id,
      {
        $push: { products: newProduct._id },
      },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      message: "Product created",
      product: newProduct,
    });
  } catch (error) {
    console.log("error in create product", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

export const getAllProductsController = async (req, res) => {
  try {
    let allProducts = await ProductModel.find();

    return res.status(200).json({
      message: "Products fetched",
      success: true,
      products: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSingleProductController = async (req, res) => {
  try {
    let productId = req.params.productId;

    if (!productId)
      return res.status(404).json({
        message: "Product id not found",
      });

    let product = await ProductModel.findById(productId);

    if (!product)
      return res.status(400).json({
        message: "Product not found",
      });

    return res.status(200).json({
      message: "Product fetched",
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    let productId = req.params.productId;

    if (!productId)
      return res.status(404).json({
        message: "Id not found",
      });
    let { productName, description, amount, currency } = req.body;

    if (!productName || !description || !amount)
      return res.status(400).json({
        message: "All fields are required",
      });

    let updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      {
        productName,
        description,
        price: {
          amount,
          currency,
        },
      },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: "Product updated",
      updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateSingleProductValueController = async (req, res) => {
  try {
    let productId = req.params.productId;

    if (!productId)
      return res.status(404).json({
        message: "Id not found",
      });

    let update = req.body;

    if (!update)
      return res.status(404).json({
        message: "Value required",
      });

    let updateSingleProductValue = await ProductModel.findByIdAndUpdate(
      productId,
      {
        $set: update,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      message: "Product updated",
      success: true,
      product: updateSingleProductValue,
    });
  } catch (error) {
    console.log("error in single update", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    let productId = req.params.productId;

    if (!productId)
      return res.status(404).json({
        message: "Id not found",
      });

    let deLPro = await ProductModel.findByIdAndDelete(productId);

    // let user = await UserModel.findById(req.user._id);

    // let updatedUserProducts = user.products.filter((elem) => {
    //   elem !== deLPro._id;
    // });

    // user.products = updatedUserProducts;
    // await user.save();

    let updateUser = await UserModel.findByIdAndUpdate(
      req.user._id,
      {
        $pull: { products: productId },
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Product deleted",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};