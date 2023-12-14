const name = {
    firstName: "Utkarsh",
    lastName: "Bhardwaj"
}

function printName(home,country){
    console.log(this.firstName+" "+this.lastName+" ,"+home+" "+country);
}
// => BINDED function return an function that can be invoked later
const bindedFunction = printName.bind(name,"original bind");
bindedFunction("india");

// => CALL function immediately execute the function with arguments
printName.call(name,"bettiah","india");

// ===== POLYFILL OF BIND ======

Function.prototype.myBind = function(...args){
    const obj =  this;
    return function(...args2){
        const names = args[0];
        const params = args.slice(1);
        // => APPLY function exectute the function with parameter of array
        return obj.apply(name,[...params, ...args2]);
    }
}

const bindedFunction2 = printName.myBind(name,"my bind");
bindedFunction2("india");
