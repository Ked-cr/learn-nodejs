import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { responseMiddleware } from "./middleware/responseHandler.js";

// NOTE: Load .env.local first, then fallback to .env
dotenv.config({ path: ".env.local" });
dotenv.config();

const app = express();
const port = process.env.PORT;

// NOTE: mengunakan morgan type dev untuk loging
app.use(morgan("dev"));
// NOTE: mengunakan CORS
app.use(cors());
// NOTE: mengunakan body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(responseMiddleware);
// NOTE: routes
app.use("/api", routes);
// 404 Handler
app.use((req, res) => {
  return res.sendError("Route tidak ditemukan", "NOT_FOUND", 404);
});
app.use(errorHandler);

// NOTE:listen
app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
