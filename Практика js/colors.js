// Получить элемент с идентификатором "colorfulText"
const colorfulText = document.getElementById("colorfulText");

// Функция для генерации случайного цвета
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Функция для изменения цвета текста
function changeColor() {
  colorfulText.style.color = getRandomColor();
}

// Установить интервал для изменения цвета каждые 1000 миллисекунд (1 секунда)
setInterval(changeColor, 1000);