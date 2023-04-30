//! Видео - 0:00:00...0:14:35

/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент (тот на котором произошло событие)
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие (тот на котором "весит" слушатель событий)
 */
//! Пример механизма всплытия событий, и их фиксации в зависимости от того, где событие произошло и где мы его "словили" (зафиксировали).

// Объект-ссылок на элементы HTML разметки
const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

// Блок слушателей "повешаных" на элементы разметки
refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

// Вешаем "слушатель" на "window"
// window.addEventListener('click', evt => {
//   console.log('window');
//   console.log('window -> evt.target', evt.target);
//   console.log('window -> evt.currentTarget', evt.currentTarget);
// });
//! Закомментируй блок слушателей, раскомментируй слушателя на "window" и смотри результат в консоле.

// Колл-бек функции событий:
// - событие "клик" на элементи "parent"
function onParentClick(evt) {
  console.log('onParentClick');
  console.log('onParentClick -> evt.target', evt.target);
  console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

// - событие "клик" на элементи "child"
function onChildClick(evt) {
  console.log('onChildClick');
  console.log('onChildClick -> evt.target', evt.target);
  console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
}

// - событие "клик" на элементи "innerChild"
function onInnerChildClick(evt) {
  console.log('onInnerChildClick');
  console.log('onInnerChildClick -> evt.target', evt.target);
  console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
}

