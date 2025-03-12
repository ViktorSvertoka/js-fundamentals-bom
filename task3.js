// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

document.querySelector("#deleteButton").addEventListener("click", () => {
  const dropdown = document.querySelector("#dropdown");
  const selectedOption = dropdown.options[dropdown.selectedIndex];

  if (selectedOption) {
    selectedOption.remove();
  }
});
