// 1. Function Statement or Function Declaration
function a(){
    console.log("a called");
}

// 2. Function Expression (function used as a value)
const b = function(){
    console.log("b called")
}

// In hoisting a is assigned a function but b is assigned with undefined
// as if we call a() before it function declaration it will work 
// but b() before function assigning to be will give error


// 3. Anonymous function ==> Where function is used as a value
// function () {

// }

// 4. Named Function Expression
const c = function xyz(){
    console.log("c called");
}
c()
// xyz()  ====> THROW error

// 5. Different between parameters and arguments
// The value which passed in function call are arguments and value which takes these as input in function are called params

// 6. First Class Functions
// The ability to function to be used as a value it knowns as a first class function
// function can be pass as a argument / function can be return from function / can be assigned as a value to variable