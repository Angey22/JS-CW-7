//! Видео - 2:21:20...3:16:39

//! Задача 1:
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення.

const refs = {
    button: document.getElementById('alertButton'),
    input: document.getElementById('alertInput'),
    output: document.querySelector('.taskTitle'),
};

refs.button.addEventListener('click', onBtnClic);

function onBtnClic() {
    refs.output.textContent = refs.input.value;
}


//!============================================================


//! Задача 2:
// Після натискання кнопки "SWAP ME" здійснюється обмін містом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

const refs2 = {
    button: document.getElementById('swapButton'),
    leftInput: document.getElementById('leftSwapInput'),
    rightInput: document.getElementById('rightSwapInput'),
    ouput: document.querySelector('.taskTitle2'),
};

refs2.button.addEventListener('click', onBtnSwapClic2);

// 1-й вариант
function onBtnSwapClic() {
    const saveLeft = refs2.leftInput.value;
    const saveRight = refs2.rightInput.value;

    refs2.leftInput.value = saveRight;
    refs2.rightInput.value = saveLeft;
}

// 2-й вариант
function onBtnSwapClic2() {
    const saveLeft = refs2.leftInput.value;

    refs2.leftInput.value = refs2.rightInput.value;
    refs2.rightInput.value = saveLeft;
}


//!============================================================


//! Задача 3:
// Кнопка "Приховати" ховає <p> і замінює назву кнопки на "Розкрити", при повторному натисканні текст знову стає доступним і кнопка набуває початкового вигляду.

const refs3 = {
    button: document.getElementById('passwordButton'),
    input: document.getElementById('passwordInput'),
    ouput: document.querySelector('.taskTitle3'),
};

refs3.button.addEventListener('click', onBtnClicShow);

function onBtnClicShow() {
    if (refs3.button.textContent === 'Розкрити') {
        refs3.ouput.style.display = 'block';
        refs3.button.textContent = 'Приховати';
        return;
    }

    refs3.ouput.style.display = 'none';
    refs3.button.textContent = 'Розкрити';
}
