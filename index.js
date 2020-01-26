// Write your solution here
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    let my_array = drivers.slice(0);
    my_array.push(name);
    return my_array;
}

function prependDriver(name) {
    let my_array = drivers.slice(0);
    my_array.unshift(name);
    return my_array;
}

function removeFirstDriver() {
    let my_array = drivers.slice(0);
    my_array.shift();
    return my_array;
}

function removeLastDriver() {
    let my_array = drivers.slice(0);
    my_array.pop();
    return my_array;
}