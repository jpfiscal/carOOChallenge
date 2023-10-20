class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("Beep.");
    } 
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`)
    }
}
class Car extends Vehicle{
    constructor(make, model, year, numWheels){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year, numWheels){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log("VROOM!!!");
    }
}

class Garage{
    constructor(cap,spots){
        this.cap = cap;
        this.spots = [];
    }
    add(v){
        if(this.spots.length < this.cap && typeof v === 'object'){
            this.spots.push(v);
            console.log("Vehicle added!");
        }else if (this.spots.length >= this.cap && typeof v === 'object'){
            console.log("Sorry, we're full.");
        }else{
            console.log("Only vehicles are allowed in here!");
        }
    }
}