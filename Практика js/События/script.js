// Получаем элементы
const checkbox = document.getElementById('colorToggle');
const label = document.getElementById('colorLabel');
const content = document.getElementsByClassName('content');

// Добавляем обработчик события для изменения цвета фона
checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = 'black';
        document.querySelector('p').style.color = 'white'; // Изменение цвета текста в теге
        document.querySelector('h1').style.color = 'white';
        document.querySelector('.content').style.backgroundColor = 'darkolivegreen'; // Изменение цвета фона блока с классом .content
        text.textContent = 'Светлая тема --->';
    } else {
        document.body.style.backgroundImage = 'url("https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-thumb.jpg")'
        document.body.style.backgroundColor = 'white';
        document.querySelector('.content').style.backgroundColor = 'bisque'; // Изменение цвета фона блока с классом .content
        document.querySelector('p').style.color = 'black'; // Изменение цвета текста в теге <p>
        document.querySelector('h1').style.color = 'black';
        text.textContent = 'Тёмная тема --->';
    }
});

text.textContent = 'Тёмная тема --->';

