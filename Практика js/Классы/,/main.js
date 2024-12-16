function showContent() {
    //Ищем все опции по названию
    var radios = document.getElementsByName('options');
    
    //И потом по классу проходимся и выполняем всё
    var contents = document.querySelectorAll('.content');
    
    //Потом проходимся по всем радиокнопкам
    for (var i =  i < radios.length; i++;){
        if (radios[i].checked) {
            for(var j = 0; j < contents.length; j++){
                contents[j].style.display = 'none';
            }
            document.getElementById(radios[i].value).style.display ='block';
        }
    }
       
}

class car{
    constructor(year, mark, model, engine, fuel){
        this.year = year;
        this.mark = mark; 
        this.model = model;
        this.engine = engine; 
        this.fuel = fuel;

    }
}

class moto extends car{
    constructor(year, mark, model, engine, fuel, mototype, peredacha, passenger, frontglass, lulka){
        super(year, mark, model, engine, fuel);
        this.mototype = mototype;
        this.peredacha = peredacha;
        this.passenger = passenger;
        this.frontglass = frontglass;
        this.lulka = lulka;
    }
}

class legkovaya extends car{
    constructor(year, mark, model, engine, fuel, cartype, doors, roadmiles, unidrive){
        super(year, mark, model, engine, fuel);
        this.cartype = cartype;
        this.doors = doors;
        this.roadmiles =roadmiles;
        this.unidrive = unidrive;
    }
}

class gruzovaya extends car{
    constructor(year, mark, model, engine, fuel, weightholder, howmuchweight, mechanica, wheels){
        super(year, mark, model, engine, fuel);
        this.weightholder = weightholder;
        this.howmuchweight = howmuchweight;
        this.mechanica = mechanica;
        this. wheels = wheels;
    }
}