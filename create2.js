const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

// Показуємо/ховаємо список опцій при натисканні на кнопку
dropdownButton.onclick = function() {
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Функція для вибору опції та зміни тексту кнопки
function selectOption(option) {
  dropdownButton.textContent = option.textContent;
  dropdownContent.style.display = "none"; // Приховуємо список після вибору
}

// При натисканні за межами меню, ховаємо його
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    dropdownContent.style.display = "none";
  }
}