document.addEventListener("DOMContentLoaded", function() {
    var num = document.getElementById("num");
    var btn = document.getElementById("corzina");
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementById("closeBtn");
    var clearBtn = document.getElementById("clearBtn");

    var btnTovar1 = document.getElementById("btn1");
    var btnTovar2 = document.getElementById("btn2");
    var btnTovar3 = document.getElementById("btn3");
   
    var click = 0;
    var totalSum = 0;

    btn.onclick = function() {
        modal.style.display = "flex";
    }

    clearBtn.onclick = function() {
        document.getElementById("cartItems").innerHTML = "";
        totalSum = 0;
        document.getElementById("totalPrice").textContent = "";
        num.textContent = "0";
        click = 0;
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    function addToCart(imageSrc, itemName, price) {
        var img = document.createElement("img");
        var text = document.createElement("p");
        
        img.src = imageSrc;
        img.width = 100;
        text.textContent = itemName + " - " + price + " тг";
        
        document.getElementById("cartItems").appendChild(img);
        document.getElementById("cartItems").appendChild(text);
        
        totalSum += price;
        document.getElementById("totalPrice").textContent = "Общая сумма: " + totalSum + " тг";   
    }

    btnTovar1.onclick = function() {
        click++;
        num.textContent = click;
        addToCart("https://s00.yaplakal.com/pics/pics_preview/2/5/4/17420452.jpg", "Рабочая сила", 1000);   
    }

    btnTovar2.onclick = function() {   
        click++;
        num.textContent = click;
        addToCart("https://www.meme-arsenal.com/memes/71f3883a6836424439c66d26f75c29d0.jpg", "Запись в GYM", 300);        
    }

    btnTovar3.onclick = function() {
        click++;
        num.textContent = click;
        addToCart("https://avatars.dzeninfra.ru/get-zen_doc/9533746/pub_6445a43f2068b843f70616b7_6445abb188ce9a2ceb54b91d/scale_1200", "Ремонт компьютерной техники", 3000);
    }
window.onload = function() {
    window.scrollTo(0, 0); // Прокручивает страницу вверх при загрузке
}
});

