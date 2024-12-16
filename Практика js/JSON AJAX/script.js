document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/unknown", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { //xhr.readyState == 4 - запрос завершен и ответ готов .xhr.status == 200 - успешный HTTP-статус, который означает, что запрос был выполнен успешно и сервер вернул данные.
            var response = JSON.parse(xhr.responseText);
            var colors = response.data;
            var colorContainer = document.getElementById("color-container");
            
            colors.forEach(function(color) {
                var colorBlock = document.createElement("div");
                colorBlock.className = "color-block";
                colorBlock.style.backgroundColor = color.color;
                colorBlock.textContent = color.name;
                colorContainer.appendChild(colorBlock);
            });
        }
    };
    xhr.send();
});
