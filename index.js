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
const maxPage = ;
let page = 1;
const searchQuery = "";

async function fetchCharacters(page) {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const json = await response.json();
  return {character: json.results,
    maxPage: json.info.pages
  }

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
