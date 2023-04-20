console.log("Hi");
var counter = 0;

function search(...args) {
  console.log("searching...", counter++, args);
}
/**
 * Debounce function will be called if there gap of delay in next 
 * keyup event by user
 * @param {*} searchFunction 
 * @returns 
 */
function debounceFunction(searchFunctio,delay) {
    /** 
     * Here we need to intialize timer so on each click change it will clear
     * the timeout
     * */  

    let timer;
    let context = this;
    return function(){
        clearTimeout(timer);
        var timer = setTimeout(() => {
          search.apply(this);
        }, delay);
    }
}

const betterFunction = debounceFunction(search,300);

/**
 * Throttle function will trigger after fixed interval of time
 * here apply used to bind the arguments
 * @returns 
 */
function throttle(searchFunction, delay) {
     let wait = false;
     let context = this;
    return function(...args){
         if(wait){
            return;
         }
         wait = true;
         setTimeout(()=>{
             search.apply(context,args);
            wait = false;
         }, delay);
    }
}

const betterFunctionThrottle = throttle(search,1000);