class Vehicle{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    printVehicleDetails(){
        console.log(this);
    }
}

class Car extends Vehicle{
    constructor(model,cost,name,year){
        super(name,year);
        this.model=model;
        this.cost=cost;
    }
    print(){
        console.log(this)
    }
}

const car1=new Car("XUV 700",1500000,"Mahindra",2019);
car1.print();
car1.printVehicleDetails(); 