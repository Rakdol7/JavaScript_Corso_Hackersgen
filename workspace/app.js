"use strict"

function defaultValue(string/*= "World"*/) {
    string = string || "World"; //ES5-
    return string;
}

function toCapital(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function getUserName() {
    const name = prompt("Il tuo nome?");
    return toCapital(defaultValue(name));
}

const name = getUserName();
document.body.innerHTML = "Hello, " + name + "!";

function nothing() {}
console.log(nothing()); //invoke
console.log(nothing); //value of var nothing

function something() {
    return "miao";
}
console.log("Invoke:", something());
console.log("Value:", something);

const o = {
    // method
    hello: function() {
        console.log("Hello");
    }
};
o.hello(); //method invocation

const x = [];
const y = function() {}; //anonymous function

function doTwice(fn) {
    // follia
    return function() {
       fn();
       fn();
    };
}
const f = doTwice(function() {
    console.log("miao");
});
f(); //follia
