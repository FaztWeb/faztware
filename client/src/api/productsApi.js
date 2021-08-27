import axios from "axios";

const API = process.env.REACT_APP_API || "";

export const getProducts = async () => await axios.get(`${API}/products`);

export const saveProduct = async (newProduct) =>
  axios.post(`${API}/products`, newProduct, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
