import { API_URL } from "./config";
import { TDeck } from "./deckAPIs";

// api to create a card
export async function createCard(deckId: string, text: string): Promise<TDeck> {
  const r = await fetch(`${API_URL}/decks/${deckId}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text })
  });
  return r.json();
}