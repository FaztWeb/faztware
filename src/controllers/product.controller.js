import Product from "../models/Product";
import { uploadImage } from "../helpers/cloudinary";
import createError from "http-errors";
import { productSchema } from "../libs/schema.validator";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error)
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const payload = await productSchema.validateAsync(req.body);
    const { name, price, description, quantity } = payload;
    const productFound = await Product.findOne({ name: name });
    if (productFound) throw createError.Conflict("Product Already exists");
    const result = await uploadImage(req.files?.image?.tempFilePath);
    const newProduct = new Product({
      name,
      price,
      description,
      quantity,
      images: {
        url: result ? result.secure_url : "",
      },
    });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    if (error.isJoi) error.status = 400;
    console.log(error);
    next(error);
  }
};

export const updateProduct = (req, res) => {
  res.json("updating products");
};

export const getProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    const productFound = await Product.findById(id);
    if (!productFound) return res.sendStatus(404);
    res.json(productFound);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDeleted = await Product.findByIdAndDelete(id);
    if (productDeleted) return res.sendStatus(204);
    return res.sendStatus(404);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
