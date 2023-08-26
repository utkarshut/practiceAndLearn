//Sieve of Eratosthenes
function printAllPrime(num){
    const numArray = Array(num).fill(true);
    for(i=2;i*i<num;i++){
        for(j=i;j<num;j+=i){
            numArray[j] = false;
        }
    }
    const r = [];
    for(i=2;i<numArray.length;i++){
        if(numArray[i]){
            r.push(i);
        }
    }
    console.log(r);
}

printAllPrime(23)