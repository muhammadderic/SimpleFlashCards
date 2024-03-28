import { Request, Response, NextFunction } from "express";

import Deck from "../models/deckModel";

// Controller methods
const deckController = {
  // Get all decks
  getAllDecks: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Get All Decks");
    } catch (error) {
      next(error);
    }
  },

  // Get deck by ID
  getDeckById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Get a deck");
    } catch (error) {
      next(error);
    }
  },

  // Create a new deck
  createDeck: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Create a deck");
    } catch (error) {
      next(error);
    }
  },

  // Update deck by ID
  updateDeck: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Update a deck");
    } catch (error) {
      next(error);
    }
  },

  // Delete deck by ID
  deleteDeck: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Delete a deck");
    } catch (error) {
      next(error);
    }
  }
};

export default deckController;