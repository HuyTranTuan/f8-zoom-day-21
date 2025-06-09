const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
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
    let length = this.length;
    const result = [];
    const copyArray = [];
    for (let i = 0; i < length; i++) {
        if (i >= start && i < start + deleteCount) {
            result.push(this[i]);
        }
    }
    for(let i=0; i<=start; i++){
        copyArray.push(this[i])
    }
    if(items)
        for(let i=0; i<items.length; i++){
            copyArray.push(items[i])
        }
    for(let i=start + deleteCount; i<length; i++){
        copyArray.push(this[i])
    }
    fruits2 = copyArray
    return result;
}
// console.log("* Splice 2")
// console.log(fruits2.splice2(1, 2, "Lemon", "Apple", "Mango")); //



//slice
Array.prototype.slice2 = function(start, end) {
    if(start > end) return "False input!"
    let length = this.length;
    const result = [];
    if(start < 0){
        for(let i = length + start; i< length; i++){
            result.push(this[i]);
        }
        for(let i = 0; i< end; i++){
            result.push(this[i]);
        }
    }
    else{
        for (let i = start; i < end; i++) {
            result.push(this[i]);
        }
    }
    return result;
}
// console.log("\n* Slice 2")
// console.log(fruits.slice2(1, 3));
// console.log(fruits.slice2(-2, 3));
// console.log(fruits.slice2(3, 4));


//sort
Array.prototype.sort2 = function(compareFunction) {
    let length = this.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(this[i]);
    }
    return result
}
// console.log("\n* Sort 2");
// console.log(people.sort2((a, b) => a.age - b.age));

//reverse
Array.prototype.reverse2 = function() {
    let length = this.length;
    const result = [];
    for (let i = length - 1; i >= 0; i--) {
        result.push(this[i]);
    }
    return result;
}
// console.log("\n* Reverse 2")
// console.log(people.reverse2());

//concat
Array.prototype.concat2 = function(param) {
    let length = this.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(this[i]);
    }
    // if()
    return result
}
// console.log("\n* Concat 2")
// console.log(fruits.concat2("Banana", "Orange", "Lemon", "Apple", "Mango"));

//join
Array.prototype.join2 = function(separator) {
    let length = this.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(this[i]);
    }
    return result
}
// console.log("\n* Join 2")
// console.log(fruits.join2(","));

//flat
Array.prototype.flat2 = function() {
    let length = this.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(this[i]);
    }
    return result
}
// console.log("\n* Flat 2")
// console.log(twoDimensionalArray.flat2());

//filter
Array.prototype.filter2 = function(callback) {
    let length = this.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(this[i]);
    }
    return result.filter(callback);
}
// console.log("\n* Filter 2")
// console.log(people.filter2((person) => person.age > 20));

//reduce
Array.prototype.reduce2 = function(callback, initialValue) {
    let length = this.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(this[i]);
    }
    return result;
}
// console.log("\n* Reduce 2")
// console.log(people.reduce2((acc, person) => acc + person.age, 0));
