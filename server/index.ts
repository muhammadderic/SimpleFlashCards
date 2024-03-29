import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

const routers = require("./routes");
import connectDB from "./config/db";

const app: Express = express();

// Variable env configuration
dotenv.config({ path: path.join(__dirname, "config", ".env") });

app.use(cors({
  origin: "*",
}))

// Connect to DB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routers);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});