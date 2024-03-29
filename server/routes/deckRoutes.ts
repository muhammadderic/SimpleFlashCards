import express from "express";

const router = express.Router();

// Controller
import deckController from "../controllers/deckController";

// Routes for decks
router.get("/", deckController.getAllDecks);
router.get("/:id", deckController.getDeckById);
router.post("/", deckController.createDeck);
router.post("/:id/cards", deckController.createCard);
router.put("/:id", deckController.updateDeck);
router.delete("/:id", deckController.deleteDeck);
router.delete("/:id/cards/:index", deckController.deleteCard);

export default router;