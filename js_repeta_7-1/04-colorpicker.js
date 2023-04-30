//! Видео - 1:00:20...1:42:30

// Исходный массив объектов - база данных.
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

// Создаем переменную-ссылку на <div> присутствующий в HTML.
const paletteContainer = document.querySelector('.js-palette');

// Создаем переменную - строку с нужной разметкой, которую сгенерировал скрипт.
const cardsMarkup = createColorCardsMarkup(colors);

// Вставляем разметку в DOM
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// "Вешаем слушателя на "paletteContainer" и задаем ссылку на колл-бек функцию выполняемую при регистрации этого события
paletteContainer.addEventListener('click', onPaletteContainerClick);

// Функция автоматической генерации разметки на основе исходного массива объектов и заданного шаблона тегов.
function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
    })
    .join('');
}

// Колл-бек функция события 
function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

// Функция изменения свойств "body"
function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

// Функция удаления вспомогательного (.is-active) CSS класса с предыдущей активной карточки.
function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

// Функция добавления вспомогательного (.is-active) CSS класса на активную карточку.
function addActiveCardClass(card) {
  card.classList.add('is-active');
}


//! "element.parentNode" - свойство, которое возвращает родителя "element" в DOM дереве, т.е. родительский элемент на один уровень вложенности назад. Дополнительно см. - https://developer.mozilla.org/ru/docs/Web/API/Node/parentNode

//! element.closest('[CSS-селектор]') возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному "CSS-селектору" или "null", если таковых элементов вообще нет.
