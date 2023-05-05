//! Видео - 1:36:25...1:52:00

//! Debounce - "Событие Input"
// Создаем переменные ссылки на теги <input>
const nameInputSt = document.getElementById('nameInputSt');
const nameInputDb1 = document.getElementById('nameInputDb1');
const nameInputDb2 = document.getElementById('nameInputDb2');

// "Вешаем" слушателя на тег <input> по событию 'input'.
nameInputSt.addEventListener('input', (evente) => {
    console.log('<----- Standart ----->');
    console.log(evente);
    console.log('evente.carrentTarget =>', evente.currentTarget);
    console.log('evente.target =>', evente.target);
    console.log('evente.target.value =>', evente.target.value);
    console.log('-------------------------------------------');
});

// "Вешаем" слушателя на тег <input> по событию 'input' с использованием метода "debounce" (с настройками по умолчанию).
nameInputDb1.addEventListener('input', _.debounce((evente) => {
    console.log('<----- Debounce - 1 ----->');
    console.log(evente);
    console.log('evente.carrentTarget =>', evente.currentTarget);
    console.log('evente.target =>', evente.target);
    console.log('evente.target.value =>', evente.target.value);
    console.log('-------------------------------------------');
}, 1000));

//! Обрати внимание на то, что при обращении через "event.carrentTarget" ответом является "null". Это связано с тем, что возникает задержка.

// "Вешаем" слушателя на тег <input> по событию 'input' с использованием метода "debounce" (с обратными настройками).
nameInputDb2.addEventListener('input', _.debounce((evente) => {
    console.log('<----- Debounce - 2 ----->');
    console.log(evente);
    console.log('evente.carrentTarget =>', evente.currentTarget);
    console.log('evente.target =>', evente.target);
    console.log('evente.target.value =>', evente.target.value);
    console.log('-------------------------------------------');
}, 1000, { leading: true, trailing: false, }));