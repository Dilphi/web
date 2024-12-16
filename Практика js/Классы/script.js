class Transport {
    constructor(marka, model, year, color, vin) {
        this.marka = marka;
        this.model = model;
        this.year = year;
        this.color = color;
        this.vin = vin;
    }
}

class Car extends Transport {
    constructor(marka, model, year, color, vin, doors) {
        super(marka, model, year, color, vin);
        this.doors = doors;
    }
}

class Truck extends Transport {
    constructor(marka, model, year, color, vin, gruz) {
        super(marka, model, year, color, vin);
        this.gruz = gruz;
    }
}

class Motorcycle extends Transport {
    constructor(marka, model, year, color, vin, type) {
        super(marka, model, year, color, vin);
        this.type = type;
    }
}

document.getElementById('enter').addEventListener('click', function() {
    document.getElementById('transportForm').classList.remove('hidden');
    document.getElementById('specific').innerHTML = '';
});

document.getElementsByName('vibor').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const specific = document.getElementById('specific');
        specific.innerHTML = '';
        
        if (this.value == 'legco') {
            specific.innerHTML = `
                <div class="input">
                    <label for="doors">Количество дверей</label>
                    <input type="text" id="doors">
                </div>
            `;
        } else if (this.value == 'gruz') {
            specific.innerHTML = `
                <div class="input">
                    <label for="gruz">Грузоподъемность (т)</label>
                    <input type="text" id="gruzov">
                </div>
            `;
        } else if (this.value == 'moto') {
            specific.innerHTML = `
                <div class="input">
                    <label for="type">Тип мотоцикла</label>
                    <input type="text" id="type">
                </div>
            `;
        }
    });
});

document.getElementById('submit').addEventListener('click', function() {
    const marka = document.getElementById('marka').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const color = document.getElementById('color').value;
    const vin = document.getElementById('vin').value;
    
    let generalis;
    
    if (document.getElementById('legco').checked) {
        const doors = document.getElementById('doors').value;
        generalis = new Car(marka, model, year, color, vin, doors);
    } else if (document.getElementById('gruz').checked) {
        const gruz = document.getElementById('gruzov').value;
        generalis = new Truck(marka, model, year, color, vin, gruz);
    } else if (document.getElementById('moto').checked) {
        const type = document.getElementById('type').value;
        generalis = new Motorcycle(marka, model, year, color, vin, type);
    }
    
    document.getElementById('result').innerHTML = `
        <h3>Данные о транспортном средстве</h3>
        <p>Марка: ${generalis.marka}</p>
        <p>Модель: ${generalis.model}</p>
        <p>Год: ${generalis.year}</p>
        <p>Цвет: ${generalis.color}</p>
        <p>VIN: ${generalis.vin}</p>
        ${generalis.doors ? `<p>Количество дверей: ${generalis.doors}</p>` : ''}
        ${generalis.gruz ? `<p>Грузоподъемность: ${generalis.gruz} т</p>` : ''}
        ${generalis.type ? `<p>Тип мотоцикла: ${generalis.type}</p>` : ''}
    `;
});
