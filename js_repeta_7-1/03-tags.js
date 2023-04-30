//! Видео - 0:25:40...1:00:20

/*
 * Делегирование:
 * - один из многих
 * - несколько из многих и Set
 */

//! Первый пример кода, переключение - один из многих
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
  
//   // Проверка наличия активной - выбранной кнопки
//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   // Условие проверки
//   // if (currentActiveBtn) {
//   //   currentActiveBtn.classList.remove('tags__btn--active');
//   // }

//   // Альтернатива "if"
//   currentActiveBtn?.classList.remove('tags__btn--active');
//   // "?." - если "currentActiveBtn" - НЕ "null" (не false), то выполнится "classList.remove", а если - "null" (false), то интерпритатор не будет дальше проверять код.

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }


//! Второй пример кода, выбор - несколько из многих
const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active');
  console.log(selectedTags);
}

//! Объект "Set" позволяет хранить уникальные значения любого типа, будь то примитивы или ссылки на объекты.
// Объекты "Set" - это коллекция значений. Значение в Set может встречаться только один раз; оно уникально в коллекции. Вы можете перебирать элементы набора в порядке вставки. Порядок вставки соответствует порядку, в котором каждый элемент был успешно вставлен в коллекцию методом add().
// Подробнее см. - (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set).