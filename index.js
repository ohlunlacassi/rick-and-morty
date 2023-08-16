import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = `${info.pages}`;
const searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    `"https://rickandmortyapi.com/api/character?page=${info.pages}"`
  );
  const json = await response.json();
  console.log(json.results);
  return json.results;
}

fetchCharacters();

async function moreCards() {
  const results = await fetchCharacters();
  results.forEach((result) => {
    const newCard = createCharacterCard(result);
    cardContainer.innerHTML += newCard;
  });
}

moreCards();
