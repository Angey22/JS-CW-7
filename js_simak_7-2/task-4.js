//! Видео - 1:52:10...2:40:38

//! Task сondition:
// Необходимо написать форму ввода логина и пароля, в которой будет производится валидация полей на длину, после завершения операции ввода текста. Проверка длины должна осуществлятся по длине введенного текстового литерала, например: введенный тест должен состоять - "не менее чем из 3-х символов и не более - 15-и символов".

// Если в инпут ввели текстовый литерал МЕНЬШЕ - 3-х или БОЛЬШЕ - 15-и символов, то его бордер должен изменить цвет на красный, а если БОЛЬШЕ - 3-х и МЕНЬШЕ 15-и, то - зеленый.

//! Task solution:
// Создаем переменную ссылку на тег <form>
const signInForm = document.getElementById('signInForm');

// Создоем переменную объект базу-данных для хранения параметров валидации используемых нашим скриптом.
const CORRECT_INPUT_LENGTH = {
    min: 3,
    max: 15,
};

// Создоем переменную объект базу-данных для хранения имен CSS классов, которые нужно "повесить" на инпут, в зависимости от результатов валидации.
const CLASS_NAMES = {
    wrong: "wrong",
    correct: "correct",
}

// "Вешаем" слушателя на форму по событию 'input' с использованием метода "debounce" для обработки событий.
signInForm.addEventListener('input', _.debounce(({ target }) => {
    // Задаем условия проверки
    if (target.value.length < CORRECT_INPUT_LENGTH.min || target.value.length > CORRECT_INPUT_LENGTH.max) {
        
        target.classList.add(CLASS_NAMES.wrong);
        target.classList.remove(CLASS_NAMES.correct);
    } else {
        
        target.classList.add(CLASS_NAMES.correct);
        target.classList.remove(CLASS_NAMES.wrong);
    }
}, 800));

//! Обрати внимание на то, что мы не просто "вешаем" нужный класс, а одновременно с эти еще и удаляем - противоположный. Это необходимо для того, что-бы организовать автоматическое переключение с одного состояния на другое, при коррекции ввода текста.
