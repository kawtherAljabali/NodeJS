
var x;
var z="kawther";
var x,y,z;
var a="aa",  b="bb", c="cc"

var s="true";
var g="fals";
var w="true";

const t="ahmad";

let array=[];
let array1=[1,2,3,4,5,6,7,8,9,10];

let array2=[a,b,c,d,e,f,j];

var q={
    a:1,
    b:2,
    c:3

}

var koko={
    a:"koko1",
    b:"koko2",
    c:"koko3"

}
var bolean={
    a:true,
    b:false,
    c:true

}

var object={
    a:[1,2,2],c:["a","a","a"],b:[11,23,44]
}

 var obk={
 s:{
     l1:{
         koko:"aaa",
     },
    },
    a:{koko1:"ahmad"},
    b:{prog:true},

};


var kaka={
    a:1,
    b:"kawther",
    c:true,
    d:["kawther","ahmad"],
    c:{a:true,b:false,c:true},
};


var z=[{a:"koko"},{b:"ahmad"}];

var w=[{a:[1,2,3]},{s:"koko"}];

// 18 Write a function to sum two numbers passed in parameters
function sum (n1, n2) {
    return sum= n1 + n2;
 }
 sum(5,2);
 console.log(sum);
// 19 write a function to multiply two numbers
function mult (n3, n4) {
    return mult = n3 * n4;
 }
 mult(5,2);
 console.log(mult);

// 20 write a function to sum two numbers entered by user
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n');
console.log('Addition of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
  var a = parseInt(x);
  var b = parseInt(y);
        var sum = (a+b);
       console.log('\n');
       console.log('The sum of ',a, ' and ',b, ' is ' , sum,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
});

// 21 write a function to multiply two numbers entered by user
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n');
console.log('Addition of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (z) {
   rl.question('Enter  second value : ', function (n) {
  var a = parseInt(z);
  var b = parseInt(n);
        var mult = (a*b);
  
       console.log('\n');
       console.log('The multiply of ',a, ' and ',b, ' is ' , mult,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
});


// 22 Write a function to return a value
function myData() { 
    return 123; 
 } 
 console.log(myData()); // 123 
 
 function myValue() { 
 } 
 console.log(myValue()); // undefined 

// 23 Write a function to print a value
function hello(name) {
    console.log("hello " + name);
}
hello(" node js");