import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDeck, TDeck } from "../utils/deckAPIs";
import { createCard, deleteCard } from "../utils/cardAPIs";
import Button from "./DeleteButton";
import "../styles/deck.css";

function Deck() {
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { deckId } = useParams();

  async function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    const { cards: deckCards } = await createCard(deckId!, text);
    setCards(deckCards);
    setText("");
  }

  async function handleDeleteCard(index: number) {
    if (!deckId) return;
    const newCards = await deleteCard(deckId, index);
    setCards(newCards.cards);
  }

  useEffect(() => {
    async function fetchDeck() {
      if (!deckId) return;
      const deck = await getDeck(deckId);
      setDeck(deck);
      setCards(deck.cards);
    }
    fetchDeck();
  }, [deckId]);

  return (
    <div className="Deck">
      <h1 className="deck__title">{deck?.title}</h1>
      <ul className="decks">
        {cards.map((card, index) => (
          <li className="deck" key={index}>
            <Button className="deck__delete" onClick={() => handleDeleteCard(index)} text="X" />
            <p>{card}</p>
          </li>
        ))}
      </ul>

      <form className="deck-form" onSubmit={handleCreateCard}>
        <div className="input-container">
          <input
            type="text"
            id="deck-title"
            className="deck-title-input"
            placeholder=" "
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
          <label htmlFor="deck-title" className="placeholder">Deck Title</label>
        </div>
        <button className="button">Create Text</button>
      </form>
    </div>
  )
}

export default Deck;