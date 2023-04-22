
// IF no parameter true/false after callback function means BUBBLING
// IF true --> CAPTURING


document.getElementById("grand").addEventListener("click", () => {
    console.log("grand clicked")
}, true);
document.getElementById("parent").addEventListener("click", (event) => {
    console.log("parent clicked");
    
}, false);
document.getElementById("child").addEventListener("click", (event) => {
    console.log("child clicked")
    event.stopPropagation();
}, true);