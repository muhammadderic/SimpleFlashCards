import { API_URL } from "./config";

export type TDeck = {
  title: string;
  cards: string[];
  _id: number;
}

// api to get all decks
export async function getAllDecks(): Promise<TDeck[]> {
  const r = await fetch(`${API_URL}/decks`);
  return r.json();
}

// api to create a deck
export async function createDeck(title: string) {
  const r = await fetch(`${API_URL}/decks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    })
  })
  return r.json();
}