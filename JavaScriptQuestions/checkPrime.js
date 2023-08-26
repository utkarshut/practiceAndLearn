function checkPrime(num){
 for(i=2;i < num; i++){
    if(num % i === 0){
        return false;
    }
 }
 return true;
}

//console.log(checkPrime(13));
//console.log(checkPrime(12));

function checkPrimeEfficient(num){
  for (i=2; i*i <= num; i++){
    if(num % i == 0){
        return false;
    }
  }
  return true;
}

// console.log("13",checkPrimeEfficient(13));
// console.log("12",checkPrimeEfficient(12));

// As if num is big INT then squre root of it is also will be very big so to optimize more we 
// can check factor of 2 & 3 with adding cases
function primeCheckFaster(num){
   if(num === 1) return false;
   if(num === 2 || num === 3) return true;
   if(num % 2 === 0 || num % 3 === 0) return false;
   for(i=5; i*i <= num ; i++){
    if(num % i === 0){
        return false;
    }
   }
   return true;
}

console.log("13",primeCheckFaster(13));
console.log("12",primeCheckFaster(12));