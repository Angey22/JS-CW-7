//! Видео - 0:00:35...0:17:35

/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */
// Болтливые события - это события которые возникают (срабатывают) слишком часто. Например, событие скрола, событие "ресайз" - изменения размеров окна браузера, событие "мауз мув" движения курсором (управляемого с помощью мышки). Так же, болтливыми событиями можно считать ввод текста в <input>, потому, что событие возникает при каждом нажатии клавиши.

//! Важно понимать, что возникновение большого количества событий в браузере, не является чем-то из ряда вон выходящем. Браузеру всеравно сколько событий у него возникает. Проблемы возникают тогда, когда мы "вешаем" слушателя для регистрации большего количества событий! Именно необходимость обработки большого количества событий и может вызвать сбои в работе браузера, в частности - остальные составляющие сайта будут подтормаживать и ожидать окончания обработки соответствующих событий.

/*
 * Mousemove и throttle
 */
//! "throttle", функция из библиотеки "lodash" - позволяет "затормозить" операцию обработки функции регистрации событий, и активировать ее через заданный временной интервал (т.е. вызывать эту функцию через заданный временной интервал), см. - https://lodash.com/docs/4.17.15#throttle.

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

// "MouseEvent.clientX" - свойство доступное только для чтения, выдает значение горизонтальной координаты "Х" в пределах клиентской области приложения, на которой произошло событие, подробнее см. - https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/clientX.

// "MouseEvent.clientY" - свойство доступное только для чтения, выдает значение вертикальной координаты "Y" в пределах клиентской области приложения, на которой произошло событие, подробнее см. - https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/clientY


/*
 * Input и debounce
 */
//! "debounce", функция из библиотеки "lodash" - позволяет выполнить отложенную регистрацию событий, он позволяет вызывать функцию только тогда, когда прекратится поток отслеживаемых (регестрируемых) событий, см. - https://lodash.com/docs/4.17.15#debounce.

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}

//! Методы "throttle" и "debounce" - это приемы для оптимизации обработки болтливых событий созданых пользователем.