//! Видео - 1:08:40...1:29:00

//! throttle - "Событие Scroll"
// Создаем ссылки на элементы HTML документа.
const outputScrollStandart = document.getElementById('outputScrollStandart');
const outputScrollThrottling = document.getElementById('outputScrollThrottling');

// Создаем объект - базу данных для хранения данных получаемых и обрабатываемых нашим скриптом. В данном объекте мы будем хранить данные о количестве запускаемых "EventListener-ов" в каждом из режимов работы (с и без "тротлом").
const eventScrollCounter = {
    standart: 0,
    trottled: 0,
}

// "Вешаем" слушателя событий на "document" для регистрации события "scroll" регистрируемого "addEventListener-ом" в обычных условиях.
document.addEventListener('scroll', () => {
    // Счетчик регистрируемых событий "scroll", значения которого записываем в свойство "standart" объекта - "eventScrollCounter".
    eventScrollCounter.standart += 1;

    // Связываем свойство "standart" объекта - "eventScrollCounter" с соответствующим тегом <span> для отображения количественного показателя события "scroll" в окне браузера.
    outputScrollStandart.textContent = eventScrollCounter.standart;
});

// "Вешаем" слушателя событий на "document" для регистрации события "scroll" регистрируемого "addEventListener-ом" при использовании метода "throttle()".
document.addEventListener('scroll', _.throttle(() => {
    // Счетчик регистрируемых событий "scroll", значения которого записываем в свойство "trottled" объекта - "eventScrollCounter".
    eventScrollCounter.trottled += 1;

    // Связываем свойство "trottled" объекта - "eventScrollCounter" с соответствующим тегом <span> для отображения количественного показателя события "scroll" в окне браузера.
    outputScrollThrottling.textContent = eventScrollCounter.trottled;
}, 300));
