function permutateString(str, i) {
  if (i === str.length - 1) {
    console.log(str);
  } else {
    for (let j = i; j <= str.length-1; j++) {
      str = swap(str, i, j);
      permutateString(str, i + 1);
      // To reverse back string to original for other remaining operations
      str =swap(str, i, j);
    }
  }
}
function swap(str, i, j) {
  let strArray = str.split("");
  let temp = strArray[i];
  strArray[i] = strArray[j];
  strArray[j] = temp;
  return strArray.join("");
}
permutateString("ABC",0);