//globalThis is a cross-platform reference to the global object; in browsers it equals window.
Function.prototype.myCall = function(context, ...args) {
  // 1. handle null/undefined
  // 2. attach fn
  // 3. call it
  // 4. cleanup

//   test.call(null);     // globalThis
//   test.call("abc");    // String object
//   test.call(10);       // Number object
  context = context == null ?  globalThis : Object(context);

  // 2. attach function to object
  const key = Symbol();
  context[key] = this;

  // 3. call it
  const result = context[key](...args);

  // 4. cleanup
  delete context[key];

  return result;
   
};

const user = {
    name:"Utkarsh",
    greet:function(){
      console.log(this.name);
    }
}

const fn = user.greet;
fn.myCall(user);
