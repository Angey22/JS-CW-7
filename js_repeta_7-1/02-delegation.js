//! Видео - 0:14:37...0:25:00

/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */
//! Паттерн "Делегирование событий" применяется в том случае, когда есть однотипная коллекция элементов, и нужно обработать какое-то однотипное событие, которое является одинаковым для всей этой группы элементов.
// Например, у нас есть группа кнопок, и нужно обработать клик на каждой из них.Если идти обычным путем, то на каждую из соответствующих кнопок нужно "вешать" отдельный слушатель событий, или - мы можем "повесить" один слушатель на объект, внутри которого расположены эти кнопки, и регистрировать всплывающее событие нажатие на кнопки на одном общем слушателе событий.Други словами, "делегирование событий" - это когда слушатель "вешается" не на каждый отдельный элемент, а всего лишь один слушатель на их обшего "родителя"(объект внутри которого находится группа соответствующих элементов).

// Создаем переменную-ссылку на тег-<div>, внутри которого находится группа кнопок.
const container = document.querySelector('.js-container');

// "Вешаем" слушателя на <div>, внутри которого находится группа кнопок, и задаем колл-бек для него по событию.
container.addEventListener('click', onClick);

// Колл-бек функция события
function onClick(evt) {
  //! Проверка-фильтр на пренадлежность источника события - кнопке. Если НЕ кнопка - закончи функцию, а если кнопка - выдай лог.
  if (evt.target.tagName !== 'BUTTON') {
    return;
  }

  // Лог - идентификатор (содержимое) кнопки
  console.log(evt.target.textContent);
}

// Свойство "nodeName" или "tagName" - предназначено для чтения, и возвращающие имени "текущего узла" или "тега" элемента DOM дерева в виде строки. Например, тег <button> имеет имя в виде текстового литерала - 'BUTTON', а <div> - 'DIV'. Особенностью метода "nodeName" и "tagName" является то, что все имена элементов DOM дерева возвращаются в верхнем регистре.


/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}