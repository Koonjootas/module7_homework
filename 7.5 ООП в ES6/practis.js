// Задание 5.
/*
Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/

class Device{
    constructor(power){
        this.sourse = "socket";
        this.power = power;
        this.position = "on";
    }
    checkPower = function(onOrOff) {
        if (this.position === onOrOff) {
            return this.power 
        } else {
            return this.power = 0
        }
    }
}

class Lamp extends Device {
    constructor(power, position){
        super (sourse);
        this.power = power;
        this.position = position;
        super.checkPower()
    }
    
}

class Computer extends Device {
    constructor(power, position) {
        super (sourse);
        this.power = power;
        this.position = position;
        super.checkPower()
    }
    
}


const lamp = new Device(60);
const computer = new Device(80);
let lampPlug = (prompt("Do you want to plug in a lamp? Enter on or off"))
let computerPlug = (prompt("Do you want to plug in a computer? Enter on or off"))
computer.checkPower(computerPlug)
lamp.checkPower(lampPlug)
const sumPower = computer.power + lamp.power
console.log(`${sumPower}W`)