//! Видео - 0:59:50...1:29:33

/*
 * Библиотека lazysizes
 * - feature detection
 */
//! "Фичер-детекшин" или определение возможности браузера по использованию "ленивой" загрузки. Проверка основана на поиске в прототипе служебного объекта браузера - "HTMLImageElement" свойств и/или метода для осуществления процедуры "ленивой" загрузги изображений. Способ проверки, если в браузере предусмотрены соответствующие возможности, то в скрипте на служебный запрос ('loading' in HTMLImageElement.prototype), будет ответ - "true", а если нет, то - "false".
// Подробнее см. - https://web.dev/browser-level-image-lazy-loading/#kak-rabotat%D1%8C-s-brauzerami,-kotorye-eshe-ne-podderzhivayut-otlozhennuyu-zagruzku.


// Код проверки на поддержку "ленывых" изображений.
if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер поддерживает "lazyload"');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ поддерживает "lazyload"');
  addLazySizesScript();
}
//! Если браузер поддерживает "ленивые" изображения, то мы запускаем функцию "addSrcAttrToLazyImages()", а если НЕ поддерживает, то - "addLazySizesScript()".
// Нужно заметить, что изначально в HTML разметке тега <img> был использован ТОЛЬКО атрибут "data-srs", необходимый для работы внешней библиотеки "lazysizes". Поэтому, если мы хоти использовать "нативные" функции браузера по "ленивой" загрузке, нам нужно добавить во все теги <img> атрибут "srs".

// Создаем переменную ссылку на все изображения с атрибутом "data-srs", которые есть в тещем HTML файле.
const lazyImages = document.querySelectorAll('img[data-src]');

// "Вешаем" слушателей на изображения для "отлова" событий загрузки соответствующих изображений, и запуска "колл-бек" функции - "onImageLoaded()" для каждого загруженного изображения. 
lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

// "Колл-бек" функция добавления CSS класса в загруженное браузером изображение.
function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}

// Функция добавления в HTML документ тега-<script> для подключения внешней библиотеки. 
function addLazySizesScript() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}

// Функция добавления атрибута "src" в теги <img>
function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}