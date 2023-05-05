//! Видео - 1:29:20...1:36:00

//! throttle - "Событие Resize"
// Создаем ссылки на элементы HTML документа.
const outputResizeStandart = document.getElementById('outputResizeStandart');
const outputResizeThrottling = document.getElementById('outputResizeThrottling');

// Создаем объект - базу данных для хранения данных получаемых и обрабатываемых нашим скриптом. В данном объекте мы будем хранить данные о количестве запускаемых "EventListener-ов" в каждом из режимов работы (с и без "тротлом").
const eventResizeCounter = {
    standart: 0,
    trottled: 0,
}

// "Вешаем" слушателя событий на "window" для регистрации события "resize" регистрируемого "addEventListener-ом" в обычных условиях.
window.addEventListener('resize', () => {
    // Счетчик регистрируемых событий "resize", значения которого записываем в свойство "standart" объекта - "eventResizeCounter".
    eventResizeCounter.standart += 1;

    // Связываем свойство "standart" объекта - "eventResizeCounter" с соответствующим тегом <span> для отображения количественного показателя события "resize" в окне браузера.
    outputResizeStandart.textContent = eventResizeCounter.standart;
});

// "Вешаем" слушателя событий на "window" для регистрации события "resize" регистрируемого "addEventListener-ом" при использовании метода "throttle()".
window.addEventListener('resize', _.throttle(() => {
    // Счетчик регистрируемых событий "resize", значения которого записываем в свойство "trottled" объекта - "eventResizeCounter".
    eventResizeCounter.trottled += 1;

    // Связываем свойство "trottled" объекта - "eventResizeCounter" с соответствующим тегом <span> для отображения количественного показателя события "resize" в окне браузера.
    outputResizeThrottling.textContent = eventResizeCounter.trottled;
}, 300));

//! Обрати внимание на то, что событие "resize" возникает на объекте "window", именно поэтому для его регистрации - необходимо прослушивать "addEventListener-ом" объект "window", а не "document".
//! Кроме того, внутри объекта события "evente" - "currentTarget" и "target" элементами является объект "window".
