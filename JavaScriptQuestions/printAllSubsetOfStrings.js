function printSubset( str,  currentString, index=0){
    if(index === str.length){
      console.log(currentString+" ");
      return;
    }
    printSubset(str,currentString,index+1);
    printSubset(str,currentString+str[index],index+1);
}
printSubset("ABC","");