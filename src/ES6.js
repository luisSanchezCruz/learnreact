//ES6 syntax

//const and let
const  pizza = "peperoni";
let iterator = 0;


//template string
var  name = "luis";
var lastName = "sanchez";

var email = `my name is ${name} and my last is ${lastName}`;

//default parameters
var defaultPerson = {
    name: "defaultName",
    lastName: 'defaltLastname',
    id: "0",
    userType: "admin"
};

var print = (person=defaultPerson) => console.log(person);

//arrow function 
var add = (x,y) => x+y;
var tahoe = {
    resorts: ["kirkwood","squaw","heavenly","northstart"],
    print: function(delay=1000) {
        setTimeout(() => {
            console.log(this.resorts.join("/"));
        },delay);
    }
};

//destructing assignment
var sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce","tomato","mustard"]
};

var {bread,meat} = sandwich;

//console.log(bread,meat);

//object literal enhancement
var name = "luis";
var elevation = 9738;
var print = function() {
    console.log(`MT. ${name} is ${elevation} feet tall`);
};

var funHike = {name,elevation,print};
//funHike.print();

//old vs new  Object syntax
 //old
var skier = {
    name: "name",
    sound: "sound",
    speed : "50",
    powderYell: function() {
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    setSpeed: function(mph) {
        this.speed = mph;
        console.log("speed:",mph);
    }
};

//new
/*
const skier2 = {
    name,
    sound,
    speed,
    powderYell() {
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}`);
    },
    setSpeed(mph) {
        this.speed = mph;
        console.log("speed",mph);
        
    }
};
*/
//spread operator
var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8,9];

var numbers = [...arr1, ...arr2];
//console.log(numbers);



//immediatley resolved
/*
var myPromise = new Promise(function(resolve, reject) {
    
    var result  = false; //change this 

    if(result) {
        resolve({status:"ok",result:result})
    }else {
        reject({status:"error",result:result});
    }
});

myPromise.then((res) => console.log(res))
         .catch((res) => console.log(res));
*/

//classes
class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }
    print() {
        console.log(`${this.destination} will take ${this.length} days`);
    }
}

class Expedition extends Vacation {
    constructor(destination,length,gear) {
        super(destination,length);
        this.gear = gear;
    }
    print() {
        super.print();
        console.log(`bring your ${this.gear.join(" and your ")}`);
    }
}

var v = new Vacation('cancun',254);

var exp  = new Expedition('boston',10,["car","bike","horse"]);

exp.print();

console.log(Vacation.prototype);