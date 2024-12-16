let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Задний план
ctx.fillStyle = "darkcyan";
ctx.fillRect(0, 0, 700, 400);

// ТрАвА
ctx.fillStyle = "darkgreen";
ctx.fillRect(0, 400, 700, 400);

// Дом
ctx.fillStyle = "#ff9987";
ctx.fillRect(250, 200, 280, 200);

// Окна и двери
ctx.fillStyle = "chocolate";
ctx.fillRect(260, 250, 120, 150);

ctx.fillStyle = "gray";
ctx.fillRect(280, 315, 20, 25);

ctx.fillStyle = "yellow";
ctx.fillRect(410, 250, 100, 100);

// Треугольная крыша
ctx.beginPath();
ctx.moveTo(250, 200); // Левая вершина крыши
ctx.lineTo(390, 100); // Верхняя вершина крыши
ctx.lineTo(530, 200); // Правая вершина крыши
ctx.closePath();

ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();


