let Audiences = [
    {name: "Аудитория 202", seats: 15, faculty: "Математика"},
    {name: "Аудитория 207", seats: 20, faculty: "Компьютерная графика"},
    {name: "Аудитория 312", seats: 10, faculty: "Основы права"},
    {name: "Аудитория 215", seats: 18, faculty: "АИС"},
    {name: "Аудитория 209", seats: 12, faculty: "Философия"}
];

//Вывод всех аудиторий
function printAllAudiences(){
    console.log("Все аудитории:");
    for(let i = 0; i < Audiences.length; i++){
        let audience = Audiences[i];
        console.log(audience.name + ' ' + "Мест:" + ' ' + audience.seats + ' ' + "Факультет" + ' ' + audience.faculty);
    }
}
printAllAudiences();

//Вывод для указанного факультета
function Choice(facultet) {
    let facultet = prompt("Введите название факультета: ");
    let found = false; // Флаг для отслеживания наличия аудиторий по данному факультету

    for (let i = 0; i < Audiences.length; i++) {
        let audit = Audiences[i];
        if (audit.faculty == facultet) {
            console.log("Название аудитории: " + audit.name);
            console.log("Количество мест: " + audit.seats);
            found = true; // Устанавливаем флаг, если найдены аудитории
        }
    }

    
}

Choice()