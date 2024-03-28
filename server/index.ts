import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";

const desckRoutes = require("./routes/deckRoutes");

const app: Express = express();
dotenv.config();

// Variable env configuration
dotenv.config({ path: path.join(__dirname, "config", ".env") });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/decks", desckRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});