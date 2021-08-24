import Product from "../models/Product";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, price, description, quantity } = req.body;
  const newProduct = new Product({ name, price, description, quantity });

  await newProduct.save();

  res.json(newProduct);
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
