/** @format */

// This is the main server file for a Node.js/Express application. It sets up the Express server,
// configures middleware for parsing JSON, handling CORS, logging requests, serving static files,
// and error handling. It also sets up routing for the application and starts the server listening
// on a specified port.

import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routes";
import config from "./config";
import {errorHandler} from "./middlewares/errorHandling";

const app = express();

app.use(express.json());
// here is the code that i needed to use in order for my development ability to work properly. Before using this cors i couldn't  get the data from the server to the client side.
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/api", apiRouter);

app.use((req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../public/index.html"));
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(config.port || 5000, () =>
  console.log(`Server listening on port ${config.port}...`)
);
