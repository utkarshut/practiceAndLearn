function printAllDivisor(num) {
  for (i = 1; i * i < num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
  for (; i >= 1; i--) {
    if (num % i === 0) console.log(num / i);
  }
}

printAllDivisor(15);
