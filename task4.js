// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

function updateWindowSize() {
  document.querySelector("#widthValue").textContent = window.innerWidth;
  document.querySelector("#heightValue").textContent = window.innerHeight;
}

window.addEventListener("resize", updateWindowSize);

updateWindowSize();
