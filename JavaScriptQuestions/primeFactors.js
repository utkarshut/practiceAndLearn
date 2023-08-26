function primeFactors(num){
    if(num<=1) return;
    while(num % 2 == 0) {
        console.log("2");
        num = num/2;
    }
    while(num % 3 === 0){
        console.log("3");
        num = num/3;
    }
    // we can further optimize by taking increment of 6 and inside check like 
    // 5,7, 15, 17
    for(i= 5 ; i*i <= num ; i = i+6){
        while(num % i === 0){
            console.log(i);
            num = num/i;
        }
        while(num % (i+2) === 0){
            console.log(i+2);
            num = num/(i+2);
        }
    }
    if(num > 1){
        console.log("end", num);
    }
}
primeFactors(450);