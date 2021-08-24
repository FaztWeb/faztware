import express from "express";
import "./config/mongoose";
import { PORT } from "./config";

import productRoutes from "./routes/products.routes";

const app = express();

app.use(express.json());

app.use(productRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
