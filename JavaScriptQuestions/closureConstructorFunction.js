function Counter(){
    var count = 0;
    this.increment = function(){ count++; console.log(count);}
    this.decrement = function(){ count--; console.log(count);}
}
// CLOSURE
// Functions bundled together with it's lexical environment or surrounding state is called closure

// HERE this is added as its constructor function 
// it need to be instansitated by new keyword

var counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();