import React, { useEffect, useState } from "react";
import "./styles/app.css";
import { getAllDecks, createDeck, TDeck } from "./utils/deckAPIs";

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
        <h1>Your Decks</h1>

        <ul className="decks">
          {decks.map((deck) => (
            <li key={deck._id}>
              <p>{deck.title}</p>
            </li>
          ))}
        </ul>

        <form onSubmit={handleCreateDeck}>
          <label htmlFor="deck-title">Deck Title</label>
          <input
            type="text"
            id="deck-title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }} />
          <button>Create Deck</button>
        </form>
      </div>
    </div>
  )
}

export default App
