//! Видео - 0:18:30...0:59:00 & 1:11:20...1:16:40


// Вопрос - Когда происходит переход по ссылке?
//! Ответ - при "нажатии" на саму ссылку.
// Примера 1
const parentDiv = document.getElementById('parentDiv');
const childA = document.getElementById('childA');

parentDiv.addEventListener('click', (e) => {
    console.log('Parent Div');
});

childA.addEventListener('click', (e) => {
    // Воспользуемся методом "preventDefault()" для блокировки перехода по ссылке на гугл.
    e.preventDefault(); //!!!

    // Останавливаем процесс всплытия события с помощью метода "stopPropagation()".
    // e.stopPropagation(); //!!!

    e.stopImmediatePropagation(); //!!!

    console.log('Child A');
});

//! Если установить "preventDefault()" в родительский элемент, то можно заблокировать работу его дочерних элементов. Например, если есть: "<div><a>Ссылка</a></div>", установка "preventDefault()" на <div> - заблокирует работу находяшейся внутри него ссылки. Именно поэтому необходимо использовать этот метод только на том элементе, действие которого необходимо заблокировать.

//! "stopPropagation()" - останавливает процесс всплытия события вверх к следующему по вложенности элементу DOM дерева.

//! "stopImmediatePropagation()" - останавливает процесс обработки самого события.

//!=============================================================

// Примера 2
// "dataset" - это свойство предназначенное для взаимодействия с "data" атрибутами тегов. С его помощью осуществляется доступ к данным соответствующих атрибутов.

// Создаем ссылку на тег <p>
const textEl = document.getElementById('test');

// Выводим в лог объект с набором свойств, в котором каждое свойство соответствует одноименному "data" атрибуту.
console.log('"text.dataset" =>', text.dataset);

// Выводим в лог значение атрибута "data-length" тега <p>
console.log('"text.dataset.length" =>', text.dataset.length);

// Выводим в лог значение атрибута "data-lang" тега <p>
console.log('"text.dataset.lang" =>', text.dataset.lang);

//!=============================================================

// Примера 3
//! Код для иллюстрации процесса погружения и последующего всплатия событий. Раскомментируй и кликни в браузере на область тега <p> и читай сообщения.
// for (let elem of document.querySelectorAll('*')) {
//     elem.addEventListener('click', (e) => alert(`Погружение: ${elem.tagName}`), true);

//     elem.addEventListener('click', (e) => alert(`Всплытие: ${elem.tagName}`));
// }

//! Если в "addEventListener()" в качестве 3-го параметра поставить "true", то он будет отслеживать погружение, а не всплытие событий. По умолчанию, 3-й параметр "false", так как в основном обрабатываются ("ловятся") именно всплытия событий.


