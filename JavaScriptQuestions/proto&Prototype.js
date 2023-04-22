/**
 * when any object or function declared then it prototype is also declared that have all it's
 * property and methods, prototype is a property of a Function object. It is the prototype of 
 * objects constructed by that function
 * __proto__  -> when any instance of object is created it will have proto which points to it's
 * object or function prototype This is the chain that is used to traverse to find a property of
 *  a particular object.
 */

const object = {
    name: "utkarsh",
    city: "bettiah",
    getNumber : () => {console.log(7778888)}
}
const object2 = {
    name:"ut"
}
// Never do this , But by this it will inherit the propety of object
//object2.__proto__ = object;

//IMPORTANT --> Currently object.__proto__ will be Object.prototype 
// by this object2.__proto__ set to object so any change in object will come in object2
Object.setPrototypeOf(object2, object);
object.country = "india"

console.log(object2.name, object2.city, object2.country);



function Point(x, y) {
    this.x = x;
    this.y = y;
}

var myPoint = new Point();

// the following are all true  
myPoint.__proto__ == Point.prototype  // IMPORTANT
myPoint.__proto__.__proto__ == Object.prototype // IMPORTANT ---> INHERITANCE
myPoint instanceof Point; 
myPoint instanceof Object;