var a = 100;
const c = 100;
let y = 10;
// Block scope is a way by which it run the compound statememts
// when block executes in GEC it create block scope 
{
    var a = 10;
    let b = 20;
    const c = 30;
    //IMPORTANT ERROR var y = 100; // ILLEGAL SHADOWING BUT IF IT was in function block then it's fine
    console.log(a); // Here variable a value shadow to 10 for block scope.
    console.log(c); 
}

function abc(){
    var y = 1000;
}

console.log(c); 