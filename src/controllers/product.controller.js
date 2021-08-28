import Product from "../models/Product";
import { uploadImage } from "../helpers/cloudinary";
import createError from "http-errors";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res, next) => {
  try {
    let imageURL = "";
    const { name, price, description, quantity } = req.body;

    const productFound = await Product.findOne({ name: name });
    
    if (productFound) throw createError.Conflict("Product Already exists");

    /* TODO: validate fields */
    if (req.files && req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      imageURL = result.secure_url;
    }

    const newProduct = new Product({
      name,
      price,
      description,
      quantity,
      images: {
        url: imageURL,
      },
    });

    await newProduct.save();

    res.json(newProduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateProduct = (req, res) => {
  res.json("updating products");
};

export const getProduct = (req, res) => {
  res.json("get product");
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
