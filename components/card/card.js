const cardList = document.querySelector('[data-js="card-container"]');

export function createCharacterCard(character) {
  const characterList = `<li class="card">
      <div class="card__image-container">
        <img
          class="card__image"
          src="${character.image}"
          alt="${character.name}"
        />
        <div class="card__image-gradient"></div>
      </div>
      <div class="card__content">
        <h2 class="card__title">${character.name}</h2>
        <dl class="card__info">
          <dt class="card__info-title">${character.status}</dt>
          <dd class="card__info-description">Alive</dd>
          <dt class="card__info-title">${character.type}</dt>
          <dd class="card__info-description"></dd>
          <dt class="card__info-title">${character.location.name}</dt>

          <dd class="card__info-description">51</dd>
        </dl>
      </div>
    </li>`;

  cardList.innerHTML += characterList;
}
