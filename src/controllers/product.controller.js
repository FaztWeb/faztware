import Product from "../models/Product";
import { uploadImage } from "../helpers/cloudinary";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, price, description, quantity } = req.body;

    /* TODO: validate fields */
    console.log(req.files)

    const result = await uploadImage(req.files.image.tempFilePath);

    const newProduct = new Product({
      name,
      price,
      description,
      quantity,
      images: {
        url: result.secure_url,
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

export const deleteProduct = (req, res) => {
  res.json("deleting product");
};
