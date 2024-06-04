var user = {
  name: "Utkarsh",
};

function printName() {
  console.log(this.name);
}

printName();

printName.call(user);

const bounded = printName.bind(user);
bounded();
// NOT USE ARROW
Object.prototype.myBound = function(...args ){
    let context = this;
    let boundArgs = args; 
  return function () {
    return context.apply(boundArgs[0],boundArgs.slice(1));
  };
};

const bounded2 = printName.myBound(user);
bounded2();