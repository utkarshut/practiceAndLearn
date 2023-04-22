function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}
// Currying
outer()();

// DATA ABSTRACTION AND ENCAPSULATION
//  ===> Count is not available to outside function
function counter() {
    var count = 0 ; var count2 = 0;
    return function increment(){
        count++;
        console.log(count);
    }
}
var counter1 = counter();
counter1();
counter1();
var counter2 = counter();
counter2();
counter2();

// NOTE : Here we can debug and find at time of execution counter1 or counte2 
// garbage collector clean count2 it will be not in memory 
// closure will only store the variable that are necessary in 
// execution it later and only count will be stores.
