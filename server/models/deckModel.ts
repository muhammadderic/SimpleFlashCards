import mongoose from "mongoose";

// Define deck schema
const deckSchema = new mongoose.Schema({
  title: String,
  cards: [String],
});

// Create Deck model from schema
const Deck = mongoose.model('Deck', deckSchema);

export default Deck;