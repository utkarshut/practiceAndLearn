// CLouser example in iteration
function closureFunction(){
    var i = 1;
    setTimeout(()=> console.log(i),3000);
    console.log("I am end of closure function");
}
// Here SetTimeout callback function forms closure and store the reference of i
closureFunction();

// print 1 - 5 after an interval of 1 sec each

for(var i = 0; i<5; i++){
    // In this case all value is 5 as callback function of setTimeout store only reference of i
    setTimeout(()=> console.log("from var i: ",i),i*1000);
}

for(var i = 0; i<5; i++){
    // To fix it use closure to store it in function and call with latest value
    function close(i){
        setTimeout(function(){console.log("Fixed from var i: ",i)}.bind(i),i*1000);
    }    
    close(i);
}
for(let i = 0; i<5; i++){
    // In this case callback function of setTimeout store only reference of i but
    // due to let it will be always new variable for that scope
    setTimeout(()=> console.log("from let i: ",i),i*1000);
}