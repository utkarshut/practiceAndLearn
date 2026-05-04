function log(){
    console.log("Called", Date.now());
}

const throttled = throttle(log, 1000);

// store interval id
const intervalId = setInterval(throttled, 200);

// stop after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped");
}, 5000);
// Throttle limits function execution to once per interval, commonly used for scroll or resize events.
// Throttle is used for high-frequency events like scroll or resize to limit execution rate and improve performance.
function throttle(fn, delay){
    let lastTime = 0;

    return function(...args){
        let now = Date.now();

        if(now - lastTime >= delay){
            console.log(now-lastTime, now)
            lastTime = now;
            fn.apply(this, args);
        }
    }
}