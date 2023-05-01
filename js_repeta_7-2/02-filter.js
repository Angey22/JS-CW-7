//! Видео - 0:17:40...0:34:00

// Исходный массив объектов
const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
*  Алгоритм работы скрипта:
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

// Объект-ссылок
const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

// "Вешаем" слушатель событий на <input>
refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// Создаем переменную - строку с разметкой
const listItemsMarkup = createListItemsMarkup(tech);

// Вставляем сгенерированную разметку в DOM
populateList(listItemsMarkup);

// Функция для генерации строки с разметкой
function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

// Функция фильтрации
function onFilterChange(evt) {
  console.log('INPUT');
  const filter = evt.target.value.toLowerCase();

  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

// Функция вставки разметки в DOM
function populateList(markup) {
  refs.list.innerHTML = markup;
}

// Библиотека для реализации "пушистого поиска" (поиска, который выполняется при вводе не корректных ключевых слов, в т.ч. введенных с ошибками), который будет выполнять поиск наиболее похожих данных - https://fusejs.io/