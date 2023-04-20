
// IF no parameter true/false after callback function means BUBBLING
// IF true --> CAPTURING


document.getElementById("grand").addEventListener("click", () => {
    console.log("grand clicked")
}, true);
document.getElementById("parent").addEventListener("click", () => {
    console.log("parent clicked")
}, false);
document.getElementById("child").addEventListener("click", () => {
    console.log("child clicked")
}, true);