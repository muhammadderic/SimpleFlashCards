import { Request, Response, NextFunction } from "express";
import Deck from "../models/deckModel";

// Controller methods
const deckController = {
  // Get all decks
  getAllDecks: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const decks = await Deck.find();
      res.status(200).json(decks);
    } catch (error) {
      next(error);
    }
  },

  // Get deck by ID
  getDeckById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deck = await Deck.findById(req.params.id);
      if (!deck) {
        return res.status(404).json({ message: "Deck not found" });
      }
      res.status(200).json(deck);
    } catch (error) {
      next(error);
    }
  },

  // Create a new deck
  createDeck: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newDeck = new Deck(req.body);
      await newDeck.save();
      res.status(201).json({ message: "Deck saved successfully" });
    } catch (error) {
      next(error);
    }
  },

  // Create a card in a deck
  createCard: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deckId = req.params.id;
      const deck = await Deck.findById(deckId);
      if (!deck) {
        return res.status(404).json({ message: "not deck of this id exists" });
      }
      const { text } = req.body;
      deck.cards.push(text);
      await deck.save();
      res.json(deck);
    } catch (error) {
      next(error);
    }
  },

  // Update deck by ID
  updateDeck: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedDeck) {
        return res.status(404).json({ message: "Deck not found" });
      }
      res.status(200).json({ message: "Deck updated successfully" });
    } catch (error) {
      next(error);
    }
  },

  // Delete deck by ID
  deleteDeck: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedDeck = await Deck.findByIdAndDelete(req.params.id);
      if (!deletedDeck) {
        return res.status(404).json({ message: "Deck not found" });
      }
      res.status(200).json({ message: "Deck deleted successfully" });
    } catch (error) {
      next(error);
    }
  },

  // Delete a card in a deck by ID
  deleteCard: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deckId = req.params.id;
      const index = req.params.index;
      const deck = await Deck.findById(deckId);
      if (!deck) {
        return res.status(404).json({ message: "not deck of this id exists" });
      }
      deck.cards.splice(parseInt(index), 1);
      await deck.save();
      res.json(deck);
    } catch (error) {
      next(error);
    }
  }
};

export default deckController;