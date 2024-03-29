import express from "express";
import deckRoutes from "./deckRoutes";

const router = express.Router();

// All routes
router.use("/decks", deckRoutes);

module.exports = router;