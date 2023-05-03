//! Видео - 1:16:45...2:20:00

//! Условия задачи:
// Создать калькулятор стоимости продукта в зависимости от цены введенной в инпут. При обработке событий необходимо использовать делегирование. Отрендерить всю разметку через JS.

// Сумма, вычисленная с помощью данного калькулятора, должна отображаться в теге <p> расположенном под вторум инпуом.
// При изменении данных в инпуте №1 или №2 - должен происходить автоматический пересчет общей стоимости.
// Всегда должна отображаться валюта - гривня.
// Общая сумма должна отображаться с копейками (2 знака после запятой).
// В родписи второго инпута должна быть цветная подсказка, сколько килограм пользователь выбрал на втором инпуте.
// Цветная подсказка должна изменять свое значение при изменении положения ползунка.
// В инпуте №2 минимальный и максимальный порог устанавливайте самостоятельно.
// При загрузке страницы, скрипт должен автоматически рассчитать стоимость на основе данных по умолчанию, которые Вы вставите в разметке.

//! Решение задачи:
const mainForm = document.getElementById('form');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const amount = document.getElementById('amount');
const total = document.getElementById('total');

const data = {
    quantity: 0,
    price: 0,
    calcTotalPrice() {
        return (this.quantity * this.price).toFixed(2);
    }
};

dataFill();
displayTotal();

mainForm.addEventListener('change', handleFormChange);

function handleFormChange({ target }) {
    const { value } = target;

    quantityInput.disabled = false;

    if (target === priceInput) { 
        if (!Number(value)) {
            total.textContent = 'Ошибка!';
            quantityInput.disabled = true;
            return;
        }
    } else if (target === quantityInput) { 
        amount.textContent = value;
    }

    target.setAttribute('value', value);
    dataFill();
    displayTotal();
}

function dataFill() {
    data.price = priceInput.getAttribute('value');
    data.quantity = quantityInput.getAttribute('value');
}

function displayTotal() {
    total.textContent = data.calcTotalPrice() + ' грн';
}

