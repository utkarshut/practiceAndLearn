// FUNCTIONS are first class citizen function that it can be assign/pass/return
// CALLBACK FUNCTION

setTimeout(function(){console.log("Callback called")},3000);
function attachEventListner(){
    let count = 0;
    document.getElementById("btn").addEventListener("click",function(e){
        console.log(e, count++);
    })
}
// useCaptur is false means  still bubble

// document.addEventListener("touchstart", function(e) {
//     console.log(e.defaultPrevented);  // will be false
//     e.preventDefault();   // does nothing since the listener is passive
//     console.log(e.defaultPrevented);  // still false
// }, Modernizr.passiveeventlisteners ? {passive: true} : false);

// ADD EVENT LISTENER is heavy and need to remove for better memory management


let startDate = new Date().getTime();
let endDate =  startDate;

while(endDate < startDate + 5000){
    endDate = new Date().getTime();

}
console.log("while time took 5 seconds blocked then only set Timeout called even 3 second passed")

console.log("START");

setTimeout(()=> console.log("Callback"), 0);

console.log("end")