function search(val) {
    console.log("API call:", val);
}

const debouncedSearch = debounce(search, 500);

// simulate typing
debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc");
//“Debounce works by clearing the previous timer and setting a new one, so only the last call executes after delay.”
function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}