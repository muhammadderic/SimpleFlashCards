import express from "express";

const router = express.Router();

// Controller
import deckController from "../controllers/deckController";

// Routes for decks
router.get('/', deckController.getAllDecks);
router.get('/:id', deckController.getDeckById);
router.post('/', deckController.createDeck);
router.put('/:id', deckController.updateDeck);
router.delete('/:id', deckController.deleteDeck);

module.exports = router;