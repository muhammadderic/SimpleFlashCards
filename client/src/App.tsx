import React, { useEffect, useState } from "react";
import "./styles/app.css";
import { getAllDecks, createDeck, deleteDeck, TDeck } from "./utils/deckAPIs";
import { Link } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();

    const deck = await createDeck(title);
    setDecks([...decks, deck]);
    setTitle("");
    window.location.reload();
  }

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(decks.filter(deck => deck._id !== deckId));
  }

  useEffect(() => {
    async function fetchDecks() {
      const decks = await getAllDecks();
      setDecks(decks);
    }
    fetchDecks();
  }, []);

  return (
    <div className="container">
      <div className="App">
        <h1 className="title">Your Decks</h1>

        <ul className="decks">
          {decks.map((deck) => (
            <li key={deck._id} className="deck">
              <button className="deck__delete" onClick={() => handleDeleteDeck(deck._id)}>X</button>
              <Link to={`decks/${deck._id}`}>{deck.title}</Link>
            </li>
          ))}
        </ul>

        <form className="deck-form" onSubmit={handleCreateDeck}>
          <div className="input-container">
            <input
              id="deck-title"
              className="deck-title-input"
              type="text"
              placeholder=" "
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }} />
            <label htmlFor="deck-title" className="placeholder">Deck Title</label>
          </div>
          <button className="button">Create Deck</button>
        </form>
      </div>
    </div>
  )
}

export default App
