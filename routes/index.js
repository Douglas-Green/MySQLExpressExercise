/** @format */

import express from "express";
import productRouter from "./productRoute";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.sendFile("Working!!! 👍 Great Job!!!");
});

router.use("/products", productRouter);

export default router;
