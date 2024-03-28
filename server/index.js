const express = require('express');
const dotenv = require("dotenv");
const path = require("path");

const desckRoutes = require("./routes/deckRoutes");

const app = express();
dotenv.config();

// Variable env configuration
dotenv.config({ path: path.join(__dirname, "config", ".env") });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/decks", desckRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});