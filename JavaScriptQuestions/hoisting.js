getName();
console.log(x);
var x = 7;
console.log(y);
function getName(){
    console.log("HIII");
}
// When javascript program run it create GEC with memory and code phase
// it allocate memory at the top of scope in global memory space
// Variable declarations are hoisted first, then function declarations.
// If there are multiple declarations of the same variable or function, the last one will take precedence.

// let and cost are also hoisted but it will be in temporal dead zone
// let and const also allocated memory but they are store in separate memory space rather than global/ window object
console.log(a);// throw error as cant access before initialization
let a  = 10;

//let is more stict than var not allow duplicate or redeclaration of variable 
// let a  = 10 ; let a = 100; syntax error 
// let a  = 10 ; var a = 10; error

// const is even more strict to let and var
