//arrow functions
const log = message => console.log(message);

//function  in objects
const obj  =  {
    message: "they can be added to objects like variables",
    log(message) {
        console.log(message);
    }
}
//functions in arrays
const messages = [
    "they can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
];

//messages[1]("function inside an array thats crazy");

//functions can be sent to other functions as arguments just like variables
const insideFn = logger => logger("they can be sent to another functions as arguments");

//insideFn(log);
//insideFn(message => console.log(message));

var add = (x,y) => x + y;
var substract = (x,y) => x -y;
const run = funct => console.log(funct(5,4));
//run(substract);

//they can also be returned

var  createScream  = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!");
    }
}

var myfunct = createScream(log);


const createScream2  = logger => message => 
    logger(message.toUpperCase + "!!!");


//myfunct('hola');


//decalrative vs imperative
/*
imperative how it shoud happen, how to achieve results with code
declarative how shoud happen
*/

//imperative way
var string = "this is the mid day show with luis sanchez";
var urlFriendly = "";

for(var i = 0; i < string.length; i++) {
    if(string[i] == " "){
        urlFriendly += "-";
    }else {
        urlFriendly += string[i];
    }
}
//console.log(urlFriendly);


//declarative way
const str = "this is the mid day show with luis sanchez";
const urlFriendly2 = str.replace(/ /g,"-");

//console.log(urlFriendly2);

/*declarative sample
const loadAndMapMembers = compose(
    combineWith(sessionStorage,"members"),
    save(sessionStorage,"members"),
    scopeMembers(window),
    logMemberInfoToConsole,
    logFieldsToConsole("name.first"),
    countMembersBy(location.state),
    prepStatesForMapping,
    save(sessionStorage,"map"),
    renderUSMap
);
*/

let color_lawn = {
    title: "lawn",
    color: "#00FF000",
    rating: 0
};

//mutate
function rateColor(color, rating) {
    color.rating = rating;
    return color;
}
//immutable
var rateColor2 = function(color, rating) {
    return Object.assign({},color,{rating:rating});
};

const rateColor3 = (color, rating) => (
    {
        ...color,
        rating      
    }
);


/*
console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
*/
/*
console.log("immutable ");
console.log(rateColor2(color_lawn,8));
console.log(color_lawn);
*/

let list = [
    {title: "rad red"},
    {title: "lawn"},
    {title: "party  pink"}
];
//mutable
var addColor  = function(title,colors) {
    colors.push({title:title});
    return  colors;
};
//immutable
const addColor2 = (title, array) => array.concat({title});
const addColor3 = (title, array) => [...list,{title}];
/*
console.log(addColor2("dark green",list));
console.log("\n");
console.log("\n");
console.log("\n");
console.log(list);


*/


//pure functions


//impure 
var frederick = {
    name: "frederick douglass",
    canRead: false,
    canWrite: false,
};


function selfEducate() {
    frederick.canRead = true;
    frederick.canWrite = true;
}



const selfEducate2 = (person) => {
    person.canRead = true;
    person.canWrite = true;
    return person;
};

const selfEducate3 = (person) => ({
    ...person,
    canRead: true,
    canWrite: true
});
/*
console.log(selfEducate3(frederick));
console.log(frederick);
*/

//data transformations
const schools = [
    "yorktown",
    "washintong  &  lee",
    "wakefield"
];

const wschool = schools.filter((school) => school[0] == "w");

const cutSchool = (cut, list) => (
    list.filter(school => school !== cut)
);
   
//console.log(cutSchool("yorktown",schools));


var arr = [2,5,3,6];

const mapDouble = (list) => (
    list.map((number) => number * 2)
);
/*
console.log(mapDouble(arr));
console.log(arr);
*/

//high order functions
const  invokeIf = (condition, fnTrue, fnFalse) => 
    (condition) ? fnTrue() : fnFalse() 

const showWelcome = () => 
    console.log('welcome')

const showUnauthorized = () =>
    console.log('unauthorized')

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);


//recursion
const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value-1, fn) : value 
}


//countdown(10, (value) => console.log(value));

const countdown2 = (value, fn, delay=1000) => {
    fn(value)
    return (value > 0) ? 
        setTimeout(() => countdown2(value-1,fn),delay) :
        value
}

const log2 = value => console.log(value)

//countdown2(10,log2);


//composiiton

const template = "hh:mm:ss tt";
const clockTime =  template.replace("hh","03")
    .replace("mm","33")
    .replace("ss","33")
    .replace("tt","33")

console.log(clockTime);
