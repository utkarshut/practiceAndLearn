Function.prototype.myApply = function(context,args=[]){
    //null check
    // key
    // call
    // clearkey
    context = context == null ? globalThis : Object(context);
    const key = Symbol();
    context[key] = this;
    const res = context[key](...args);
    // const key1 = Symbol();
    // const key2 = Symbol();

    // Both are different values
    // key1 === key2 // false
    // thats why delete context.key is not correct as it doesnt exist only exact value 
    // delete[context]
    delete context[key];
    return res;
}

const user = {
    name:"Utkarsh",
    greet: function(name){
        console.log(this.name, name);
    }
}
const fn = user.greet;
fn.myApply(user,["Akash"]);