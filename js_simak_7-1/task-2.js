//! Условия задачи:
// Создать галерею из картинок используя исходный массив объектов.
// При клике на изображение в галереи необходимо отображать модальное окно, в котором должен отображаться текст из свойства "title" соответствующей картинки. При написание кода скрипта, необходимо использовать делегирование для обработки кликов на изображениях. 

// Исходный массив объектов.
const images = [
    {
        "title": "Кузнечик",
        "src": "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg"
    },
    {
        "title": "Фрукт",
        "src": "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg"
    },
    {
        "title": "Люди",
        "src": "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg"
    },
    {
        "title": "Часы",
        "src": "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg"
    },
    {
        "title": "Метро",
        "src": "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg"
    },
    {
        "title": "Облака",
        "src": "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg"
    },
];

// Создаем ссылку на тег <div> находящейся в HTML документе
const divEl = document.querySelector('.container');

// Создаем разметку галереи на основе массива объектов "images"
const murkupImg = images.map(({title, src}) => {
    return `<img class="img" loading="lazy" src="${src}" alt="${title}" width="320" />`
}).join('');

// Вставляем сгенерированную разметку в DOM
divEl.innerHTML = murkupImg;

divEl.addEventListener('click', onImgClick);

function onImgClick(event) {
    removeActiveImgClass();
    addActiveImgClass(event);
    
    removeModal();
    addModal(event);
}

function removeActiveImgClass() {
    const currentActiveImg = document.querySelector('img.is-active');

  if (currentActiveImg) {
    currentActiveImg.classList.remove('is-active');
  }
}

function addActiveImgClass(event) {
    event.target.classList.add('is-active');
}

function addModal(event) {
    const html = document.querySelector('body');
    const modalMarkup = `<div class="modal">
    <p class="modal_text">${event.target.alt}</p>
    </div>`;
    
    // console.log("modalMarkup:", modalMarkup)
    html.insertAdjacentHTML('beforeend', modalMarkup);
}

function removeModal() {
    const currentModal = document.querySelector('.modal');

    if (currentModal) {
    currentModal.remove();
  }
}