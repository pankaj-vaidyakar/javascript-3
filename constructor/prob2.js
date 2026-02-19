// Adding method in constructor

function Car(Brand,modle){
    this.Brand = Brand;
    this.modle = modle;

    this.start = function(){
        console.log(this.Brand + " is starting ..");
        
    }
}

let c1 = new Car("Toyota", "fortuner")

c1.start()
