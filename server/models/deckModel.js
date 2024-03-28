const mongoose = require('mongoose');

// Define deck schema
const deckSchema = new mongoose.Schema({
  title: String,
  cards: [String],
});

// Create Deck model from schema
const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;