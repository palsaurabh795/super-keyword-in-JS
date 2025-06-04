class Person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    constructor(name){
        super(name); //to invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("saurabh");