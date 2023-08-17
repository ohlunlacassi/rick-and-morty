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
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=<page${page}>`
  );
  const json = await response.json();
  maxPage = json.info.pages;
  return json.results;

}
function paginationDisplay() {
  pagination.textContent = `${page}/${maxPage}`;
}
// fetchCharacters();

async function moreCards() {
  const results = await fetchCharacters(page);
  cardContainer.innerHTML = "";
  results.forEach((result) => {
    const newCard = createCharacterCard(result);
    cardContainer.innerHTML += newCard;
  });
  paginationDisplay();
}

moreCards();

nextButton.addEventListner("click", () => {
  if (page <= maxPage) {
    page++;
    moreCards();
    fetchCharacters();
  }
});

prevButton.addEventListner("click", () => {
  if (page > 1) {
    page--;
    moreCards();
    fetchCharacters();
  }
});

paginationDisplay();
