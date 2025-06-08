const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const twoDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const people = [
    {name: "John", age: 20},
    {name: "Jane", age: 21},
    {name: "Jim", age: 22},
    {name: "Jill", age: 23},
    {name: "Jack", age: 24},
    {name: "Jill", age: 23},
];


//splice
Array.prototype.splice2 = function(start, deleteCount, ...items) {
    const arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i >= start && i < start + deleteCount) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(fruits.splice2(1, 2, "Lemon", "Apple", "Mango"));

//slice
Array.prototype.slice2 = function(start, end) {
    const arr = this;
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}
console.log(fruits.slice2(1, 3));

//sort
Array.prototype.sort2 = function(compareFunction) {
    const arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result.sort(compareFunction);
}
console.log(people.sort2((a, b) => a.age - b.age));

//reverse
Array.prototype.reverse2 = function() {
    const arr = this;
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(people.reverse2());

//concat
Array.prototype.concat2 = function(...items) {
    const arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result.concat(...items);
}
console.log(fruits.concat2("Banana", "Orange", "Lemon", "Apple", "Mango"));

//join
Array.prototype.join2 = function(separator) {
    const arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result.join(separator);
}
console.log(fruits.join2(","));

//flat
Array.prototype.flat2 = function() {
    const arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result.flat();
}
console.log(twoDimensionalArray.flat2());

//filter
Array.prototype.filter2 = function(callback) {
    const arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result.filter(callback);
}
console.log(people.filter2((person) => person.age > 20));

//reduce
Array.prototype.reduce2 = function(callback, initialValue) {
    const arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}
console.log(people.reduce2((acc, person) => acc + person.age, 0));
