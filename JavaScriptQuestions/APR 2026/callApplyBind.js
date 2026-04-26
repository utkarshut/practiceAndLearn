const user = {
  name: "Rahul",
  sayHi: function () {
    console.log(this.name);
  }
};

user.sayHi(); // Rahul

function intro(city, country) {
  console.log(this.name, city, country);
}

const person = { name: "Amit" };

intro.call(person, "Bengaluru", "India");
// Amit Bengaluru India

function intro(city, country) {
  console.log(this.name, city, country);
}

const person2 = { name: "Amit" };

intro.apply(person2, ["Bengaluru", "India"]);
// Amit Bengaluru India


function intro(city) {
  console.log(this.name, city);
}

const person3 = { name: "Amit" };

const boundFn = intro.bind(person);
boundFn("Bengaluru");
// Amit Bengaluru


const obj = {
  name: "Utkarsh",
  getName: function () {
    return this.name;
  }
};
// VV IMP
const fn = obj.getName();
// Here it work as it still point the same function not copy but fn has obj in its scope
console.log(fn);
const fn2 = obj.getName;
// Here it undefined as it still point the same function not copy but fn dont have obj in scope
console.log(fn2());

// 🧠 PRIORITY ORDER (advanced)

// When multiple apply:

// new (highest)
// bind
// call/apply
// default (fn())
// 🎯 5 GOLD LINES (interview ready)
// this depends on how function is called
// Extracting method loses this
// Arrow function does not bind this
// bind returns function, call/apply execute immediately
// Closure stores variables, this is never stored
// ⚡ MEMORY HOOK
// Dot → decides this
// No dot → lost this
// Bind → fix this
// Arrow → no this
// Closure → permanent