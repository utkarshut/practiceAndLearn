Function.prototype.myBind = function (context, ...args) {
    // closure needed as function need to access outer scope
    const fn = this;
    return function (params) {
        return fn.apply(context,args.concat(params))
    };
}
const user = {
    name: "Utkarsh",
    greet:function(name){
        console.log(this.name,name)
    }
}

const fn = user.greet;

const boundFn = fn.myBind(user,"akash");

boundFn();